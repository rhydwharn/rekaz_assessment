import { faker } from '@faker-js/faker';

let homePageElements
let registrationPageElements

before(() => {
    cy.fixture('homePageElements.json').then((elements) => {
        homePageElements = elements
    });

    cy.fixture('registrationPageElements.json').then((elements) => {
        registrationPageElements = elements
    });
})

Cypress.Commands.add('clickElement', (element) => {
    cy.get(element).click();
})

Cypress.Commands.add('typeText', (element, text) => {
    cy.get(element).type(text);
})

Cypress.Commands.add('clickSwitch', (statement) => {
    switch (statement) {
        case 'registration button':
            cy.clickElement(homePageElements.registrationButton);
            break;
        case 'first feature option':
            cy.clickElement(registrationPageElements.firstFeatureOption);
            break;
        case 'second feature option':
            cy.clickElement(registrationPageElements.secondFeatureOption);
            break;
        case 'third feature option':
            cy.clickElement(registrationPageElements.thirdFeatureOption);
            break;
        case 'submit button':
            cy.clickElement(registrationPageElements.submitButton);
            break;
        case 'submit registration button':
            cy.clickElement(registrationPageElements.submitRegistrationButton);
            break;
        case 'change language button':
            cy.clickElement(registrationPageElements.languageDropdown);
            cy.contains('English').click();
            break
        case "employee strength":
            cy.clickElement(registrationPageElements.employeeStrength);
            break;
        case "continue button":
            cy.clickElement(registrationPageElements.continueButton);
            break;
        case "applicable section":
            cy.clickElement(registrationPageElements.sectionOne);
            break;
        case "sunday switch":
            cy.clickElement(registrationPageElements.sundaySwitch);
            break
        case "friday switch":
            cy.clickElement(registrationPageElements.fridaySwitch);
            break;
        case "submit btn":
            cy.clickElement(registrationPageElements.submitBtn);
            break;
        default:
            console.log('No matching statement found');
    }
})

Cypress.Commands.add('inputSwitch', (statement) => {
    switch (statement) {
        case 'fullname':
            cy.typeText(registrationPageElements.fullNameInput, faker.person.fullName());
            break;
        case 'email address':
            cy.typeText(registrationPageElements.emailAddressInput, faker.internet.email());
            break;
        case 'phone number':
            cy.typeText(registrationPageElements.phoneNumberInput, faker.helpers.replaceSymbols('########'));
            break;
        case 'password':
            cy.typeText(registrationPageElements.passwordInput, faker.internet.password());
            break;
        case "business name":
            cy.typeText(registrationPageElements.businessName, faker.company.name());
            break;
        case "service name":
            cy.typeText(registrationPageElements.service, faker.company.name());
            break
        case "price":
            cy.typeText(registrationPageElements.price, faker.finance.amount());
            break;
        default:
            console.log('No matching statement found');
    }
})
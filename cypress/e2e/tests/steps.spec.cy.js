
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given(/^I am on the home page$/, () => {
    cy.visit('/');
    cy.get('.text-muted > .link-dark').click();
});

When(/^I click on registeration button$/, () => {
    // return true;
    cy.origin('https://platform.rekaz.io');
});

Then(/^I should see cypress the registration page$/, () => {
    return true;
});

Then(/^I click on the "([^"]*)"$/, (element) => {
	cy.clickSwitch(element);
});

Then(/^I input the "([^"]*)"$/, (element) => {
	cy.inputSwitch(element);
});


Then(/^I validate success message$/, () => {
	cy.contains("Your project's website has been successfully created!")
});

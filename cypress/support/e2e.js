
// Import commands.js using ES2015 syntax:
import './commands';
import '@faker-js/faker';
import './customActions';

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

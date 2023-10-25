// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

//cypress commands to set and get global talents variable from fixture
let talentData = null;


Cypress.Commands.add("setTalentDataFromFixture", () => {
    if (!talentData) {
        return cy.fixture("talents.json").then((talents) => {
            talentData = talents;
            return talentData;
        });
    }
});

Cypress.Commands.add("getTalentData", () => {
    if (!talentData) {
        return cy.setTalentDataFromFixture();
    }
    return cy.wrap(talentData);
});
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
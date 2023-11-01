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
let updatetalentData = null;
import 'cypress-xpath'
Cypress.Commands.add("setTalentDataFromFixture", () => {
    if (!talentData) {
        return cy.fixture("talents.json").then((talents) => {
            talentData = talents;
            return talentData;
        });
    }
});

Cypress.Commands.add("setUpdateTalentDataFromFixture", () => {
    if (!updatetalentData) {
        return cy.fixture("updatedTalents.json").then((updatetalents) => {
            updatetalentData = updatetalents;
            return updatetalentData;
        });
    }
});

Cypress.Commands.add("getTalentData", () => {
    if (!talentData) {
        return cy.setTalentDataFromFixture();
    }
    return cy.wrap(talentData);
});
Cypress.Commands.add("getUpdateTalentData", () => {
    if (!updatetalentData) {
        return cy.setUpdateTalentDataFromFixture();
    }
    return cy.wrap(updatetalentData);
});
Cypress.Commands.add('configureXpath', () => {
    cy.xpath({ xmlMode: true });
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
import { Talent } from "../../Classes/Talent";
import { LoginPage } from "../../Classes/LoginPage";

describe("LOGIN", () => {
    const loginPage = new LoginPage()
    let talentDataa;
    let talent;
    let errorMessage;
    before(() => {
        cy.setTalentDataFromFixture();
        cy.getTalentData().then((talentData) => {
            talentDataa = talentData;
        })

    })
    // beforeEach(()=>{
    //     cy.visit('https://app.staging.tribaja.co/login')
    // })
    context("LOGIN WITH VALID CREDENTIALS", () => {
        it("Log In with Valid Credentials", () => {
            talent = talentDataa.talents[0];
            loginPage.LogIn(talent)
            cy.url().should('include', '/dashboard');

        })
    })
    context("Log In with Invalid Credentials", () => {
        it("Valid Username, Invalid Password", () => {
            talent = talentDataa.incorrectTalents[0];
            loginPage.LogIn(talent)
            cy.url().should('not.include', '/dashboard');
            cy.url().should('include', '/login');
            errorMessage = "Unable to log in with provided credentials."
            loginPage.CheckErrorMessage(errorMessage)
        })
        it("Invalid Username, Valid Password", () => {
            talent = talentDataa.incorrectTalents[1];
            loginPage.LogIn(talent)
            cy.url().should('not.include', '/dashboard');
            cy.url().should('include', '/login');
        })
        it("Invalid Username, Invalid Password", () => {
            talent = talentDataa.incorrectTalents[2];
            loginPage.LogIn(talent)
            cy.url().should('not.include', '/dashboard');
            cy.url().should('include', '/login');
        })
        it("Empty Username, Filled Password", () => {
            talent = talentDataa.incorrectTalents[3];
            loginPage.LogIn(talent)
            cy.url().should('not.include', '/dashboard');
            cy.url().should('include', '/login');
        })
        it("Filled Username, Empty Password", () => {
            talent = talentDataa.incorrectTalents[4];
            loginPage.LogIn(talent)
            cy.url().should('not.include', '/dashboard');
            cy.url().should('include', '/login');

        })
        it("Empty Username, Empty Password", () => {
            talent = talentDataa.incorrectTalents[5];
            loginPage.LogIn(talent)
            cy.url().should('not.include', '/dashboard');
            cy.url().should('include', '/login');
        })
    })
    context("Log In via a Third Party", () => {
        it("Via Google", () => {

        })
        it("Via LinkedIn", () => {

        })
    })
    context("Forget Password Mechanism", () => {
        it("Forget Password", () => {

        })
    })
})
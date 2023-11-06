import { Talent } from "../../Classes/Talent";
import { LoginPage } from "../../Classes/LoginPage";
import { SignUpPage } from "../../Classes/SignUpPage";
import { ForgetPassword } from "../../Classes/ForgetPassword";
describe("LOGIN", () => {
    const loginPage = new LoginPage()
    const signUpPage = new SignUpPage()
    const forgetPassword=new ForgetPassword()
    let talentDataa;
    let talent;
    let errorMessage;
    //let talentArray=[]
    before(() => {
        cy.setTalentDataFromFixture();
        cy.getTalentData().then((talentData) => {
            talentDataa = talentData;
        })
    })
    beforeEach(() => {
        cy.viewport(2500, 1399)
        cy.visit('https://app.staging.tribaja.co/')
    })
    context("POSITIVE SCENARIOS", () => {
        it("Log In with Valid Credentials", () => {
            talent = talentDataa.talents[0];
            loginPage.LogIn(talent)
            cy.url().should('include', '/dashboard');
        })
    })
    context("NEGATIVE SCENARIOS", () => {
        it("Valid Email, Invalid Password", () => {
            talent = talentDataa.incorrectTalents[0];
            loginPage.LogIn(talent)
            cy.url().should('not.include', '/dashboard');
            cy.url().should('include', '/login');
            errorMessage = "Unable to log in with provided credentials."
            loginPage.CheckErrorMessage(errorMessage)
        })
        it("Invalid Email, Valid Password", () => {
            talent = talentDataa.incorrectTalents[1];
            loginPage.LogIn(talent)
            cy.url().should('not.include', '/dashboard');
            cy.url().should('include', '/login');
            // errorMessage=""
            loginPage.CheckErrorMessage(errorMessage)
        })
        it("Invalid Email, Invalid Password", () => {
            talent = talentDataa.incorrectTalents[2];
            loginPage.LogIn(talent)
            cy.url().should('not.include', '/dashboard');
            cy.url().should('include', '/login');
            // errorMessage=""
            loginPage.CheckErrorMessage(errorMessage)
        })
        it("Empty Email, Filled Password", () => {
            talent = talentDataa.incorrectTalents[3];
            loginPage.LogIn(talent)
            cy.get('input[name="email"][required]:invalid').should('exist')
            cy.get('input[name="password"][required]:valid').should('exist')
            cy.url().should('not.include', '/dashboard');
            cy.url().should('include', '/login');
            // errorMessage=""
            //loginPage.CheckErrorMessage(errorMessage)
        })
        it("Filled Email, Empty Password", () => {
            talent = talentDataa.incorrectTalents[4];
            loginPage.LogIn(talent)
            cy.get('input[name="email"][required]:valid').should('exist')
            cy.get('input[name="password"][required]:invalid').should('exist')
            cy.url().should('not.include', '/dashboard');
            cy.url().should('include', '/login');
            // errorMessage=""
            // loginPage.CheckErrorMessage(errorMessage)

        })
        it("Empty Email, Empty Password", () => {
            talent = talentDataa.incorrectTalents[5];
            loginPage.LogIn(talent)
            cy.get('input[name="email"][required]:invalid').should('exist')
            cy.get('input[name="password"][required]:invalid').should('exist')
            cy.url().should('not.include', '/dashboard');
            cy.url().should('include', '/login');
            // errorMessage=""
            //  loginPage.CheckErrorMessage(errorMessage)
        })
    })
    //these will be included in sign up
    context("Log In via a Third Party", () => {
        it("Via Google", () => {

        })
        it("Via LinkedIn", () => {

        })
    })
    context("Forget Password Mechanism", () => {
        it.only("Forget Password", () => {
            talent = talentDataa.talents[0];
            cy.xpath('/html/body/div[1]/div/div/div[1]/a').as('LoginPageButton')
            cy.get('@LoginPageButton').click({ force: true })
            forgetPassword.ForgetPassword("lilly12345",talent)
            //forgetPassword.OTPVerification()

        })
    })
})
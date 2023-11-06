import { checkExistenceandVisibility } from "../utils/checkExistenceandVisibility"
import { Talent } from "./Talent"
import { LoginPage } from "./LoginPage"
export class ForgetPassword {
    constructor() {
        this.loginPage = new LoginPage()
        this.OTP = ""
    }
    //getters
    get EmailAddressTextBox() {
        return cy.get('input[name="email"][required]')
    }
    get ContinueButton() {
        return cy.get('button[class="formButton"]').contains('Continue')
    }
    get OTPTextBox() {
        return cy.get('[name="otp"]')
    }
    get CreatePasswordTextBox() {
        return cy.get('input[name="password"]')
    }
    get RepeatPasswordTextBox() {
        return cy.get('input[name="repeatPassword"]')
    }
    get ResendOTPText() {
        return cy.get('.resend')
    }
    get errorMessageSpan() {
        return cy.get('.errorMessage')
    }
    get LoginButton() {
        return cy.get('button').contains('Login')
    }
    ForgetPassword(newPassword, talent) {
        this.loginPage.ForgetPasswordDiv.click({ force: true })
        cy.url()
            .then((url) => {
                expect(url).to.include('tribaja.co/reset-password')
                const text = "Reset Your Password and Regain Access to Your Tribaja Account. We will send you a confirmation email"
                cy.contains(text)
                    .should('exist')
                    .and('be.visible')
                this.ProceedForgetPassword(newPassword, talent)
            })


        //error in forget password right now cant proceed from the website /backend error

    }
    //functions/methods
    ProceedForgetPassword(newPassword, talent) {
        this.EmailAddressTextBox.type(talent.emailAddress)
        cy.get('input[name="email"][required]:valid').should('exist')
        this.ContinueButton.click({ force: true })
        //after clicking otp verification page should be enabled
        cy.contains('OTP Verification').should('exist').and('be.visible')
        this.OTPVerification()
        this.CreateNewPassword(newPassword)
        talent.password = newPassword
        this.CheckSuccessfullResetByLoggingIn(newPassword, talent)
    }

    OTPVerification() {
        cy.log('Enter OTP then replay the test')
        cy.pause()
        //after replaying
        this.OTPTextBox.invoke('text').then((text) => {
            this.OTP = text

        })
        // if (this.OTP === "") {
        //     cy.log("Please enter OTP")
        // }
        // else {
        this.ContinueButton.click({ force: true })
        // }
        //check otp verified or not
        cy.contains('New Password').should('exist').and('be.visible')
    }
    CreateNewPassword(newPassword) {
        checkExistenceandVisibility(this.CreatePasswordTextBox)
        this.CreatePasswordTextBox.clear().type(newPassword)

        checkExistenceandVisibility(this.RepeatPasswordTextBox)
        this.RepeatPasswordTextBox.clear().type(newPassword)

        checkExistenceandVisibility(this.ContinueButton)
        this.ContinueButton.click({ force: true })
        cy.contains('Password Reset Successful').should('exist').should('be.visible')
    }
    CheckSuccessfullResetByLoggingIn(newPassword, talent) {

        expect(talent.password).to.equal(newPassword)
        checkExistenceandVisibility(this.LoginButton)
        this.LoginButton.click({ force: true })
        cy.url().then((url) => {
            expect(url).to.contain('/login')
            this.loginPage.LogIn(talent)
            cy.url().should('include', '/dashboard');
        })
    }
}
import { LoginPage } from "./LoginPage"
export class VerifyOTP {
    constructor() {
        this.loginPage = new LoginPage()
        this.message = "New OTP sent successfully."
        this.verifiedText = "Congratulations and Welcome to Tribaja"
    }
    get VerifyButton() {
        return cy.contains('Verify my email')
    }
    get ChangeEmailAddressSpan() {
        return cy.get('p a:nth-child(1)')
    }
    get ResendEmailSpan() {
        return cy.get('p a:nth-child(3)')
    }
    get errorMessageSpan() {
        return cy.get('.errorMessage')
    }
    get LoginButton() {
        return cy.contains('Login')
    }
    VerifyEmail(talent) {
        this.VerifyButton
            .should('exist')
            .and('be.visible')
            .click({ force: true }).then(() => {
                cy.contains('Verified')
                    .should('exist')
                    .and('be.visible')
                cy.contains(this.verifiedText)
                    .should('exist')
                    .and('be.visible')
            })

    }
    ChangeEmailAddress() {
        this.ChangeEmailAddressSpan.click({ force: true })
    }
    ResendEmail() {
        this.ResendEmailSpan.click({ force: true }).then(() => {
            this.errorMessageSpan.invoke('text').then((text) => {
                expect(text).to.equal(this.message)
            })
        })
    }
    LoginAfterVerification(talent) {
        this.LoginButton
            .should('exist')
            .should('be.visible')
            .click({ force: true }).then(() => {
                cy.url().then((url) => { expect(url).to.include('/login') })
            })
        this.loginPage.LogIn(talent)
     

    }
}
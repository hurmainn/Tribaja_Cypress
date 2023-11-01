import { getmyCookie } from "../utils/getMyCookie"
import { Talent } from "./Talent"
export class LoginPage {
    constructor() {
        const talent = new Talent()
    }
    get ContinueWithGoogleButton() {
        return cy.xpath("/html/body/div[1]/div/div/div[2]/div[1]/button[1]")
    }
    get ContinueWithLinkedInButton() {
        return cy.xpath("/html/body/div[1]/div/div/div[2]/div[1]/button[2]")
    }
    get EmailAddressTextBox() {
        return cy.xpath("/html/body/div[1]/div/div/div[2]/form/label[1]/input")
    }
    get PasswordTextBox() {
        return cy.xpath("/html/body/div[1]/div/div/div[2]/form/label[2]/input")
    }
    get LoginButton() {
        return cy.xpath("/html/body/div[1]/div/div/div[2]/form/button")
    }
    get ForgetPasswordDiv() {
        return cy.xpath("/html/body/div[1]/div/div/div[2]/form/div/a")
    }
    get errorMessageDiv() {
        return cy.get('.errorMessage')
    }

    LogIn(talent) {
        cy.visit('https://app.staging.tribaja.co/')
        cy.xpath('/html/body/div[1]/div/div/div[1]/a').as('LoginPageButton')
        cy.get('@LoginPageButton').click({ force: true })
        if (talent.emailAddress !== '') {
            this.EmailAddressTextBox.type(talent.emailAddress)
        }
        if (talent.password !== '') {
            this.PasswordTextBox.type(talent.password, { force: true })
        }
        this.LoginButton.click({ force: true })
        cy.wait(5500)
    }
    CheckErrorMessage(errorMessage) {
        this.errorMessageDiv.invoke('text').then((errmsg) => {
            expect(errmsg).to.equal(errorMessage)
        })
    }
}
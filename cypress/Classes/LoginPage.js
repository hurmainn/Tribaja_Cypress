import { getmyCookie } from "../utils/getMyCookie"
import { Talent } from "./Talent"
export class LoginPage {
    constructor() {
        const talent = new Talent()
    }
    getContinueWithGoogleButton() {
        return cy.xpath("/html/body/div[1]/div/div/div[2]/div[1]/button[1]")
    }
    getContinueWithLinkedInButton() {
        return cy.xpath("/html/body/div[1]/div/div/div[2]/div[1]/button[2]")
    }
    getEmailAddressTextBox() {
        return cy.xpath("/html/body/div[1]/div/div/div[2]/form/label[1]/input")
    }
    getPasswordTextBox() {
        return cy.xpath("/html/body/div[1]/div/div/div[2]/form/label[2]/input")
    }
    getLoginButton() {
        return cy.xpath("/html/body/div[1]/div/div/div[2]/form/button")
    }
    getForgetPasswordDiv() {
        return cy.xpath("/html/body/div[1]/div/div/div[2]/form/div/a")
    }

    LogIn(talent) {
        cy.visit('https://app.staging.tribaja.co/')
        cy.xpath('/html/body/div[1]/div/div/div[1]/a').as('LoginPageButton')
        cy.get('@LoginPageButton').click({ force: true })
        this.getEmailAddressTextBox().type(talent.emailAddress)
        this.getPasswordTextBox().type(talent.password, { force: true })
        this.getLoginButton().click({ force: true })
    }
}
export class LoginPage {
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
}
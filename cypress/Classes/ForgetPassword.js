export class ForgetPassword {
    //getters
    get EmailAddressTextBox() {
        return cy.get('input[name="email"][required]')
    }
    get ContinueButton() {
        return cy.get('button[class="formButton"]')
    }

    //functions/methods
    ProceedForgetPassword(emailAddress) {
        this.EmailAddressTextBox.type(emailAddress)
        cy.get('input[name="email"][required]:valid').should('exist')
        this.ContinueButton.click()

    }

}
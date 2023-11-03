import { Talent } from "./Talent";
import 'cypress-xpath';
import { checkExistenceandVisibility } from "../utils/checkExistenceandVisibility";
export class SignUpPage {
    constructor() {
        const talent = new Talent()
    }
    get LoginButton() {
        return cy.get('.navbar .link-button')
    }
    get ContinueWithGoogleButton() {
        return cy.xpath("/html/body/div[1]/div/div/div[2]/div[1]/button[1]")
    }
    get ContinueWithLinkedInButton() {
        return cy.xpath("/html/body/div[1]/div/div/div[2]/div[1]/button[2]")
    }
    get FirstNameTextBox() {
        return cy.xpath("/html/body/div[1]/div/div/div[2]/form/label[1]/input")
    }
    get LastNameTextBox() {
        return cy.xpath("/html/body/div[1]/div/div/div[2]/form/label[2]/input")
    }
    get EmailAddressTextBox() {
        return cy.xpath("/html/body/div[1]/div/div/div[2]/form/label[3]/input")
    }
    get RoleDropdown() {
        return cy.xpath("/html/body/div[1]/div/div/div[2]/form/label[4]/div/div/span[1]/input")
    }
    get PasswordTextBox() {
        return cy.xpath("/html/body/div[1]/div/div/div[2]/form/label[5]/input")
    }
    get RepeatPasswordTextBox() {
        return cy.xpath("/html/body/div[1]/div/div/div[2]/form/label[6]/input")
    }
    get ContinueButton() {
        return cy.xpath("/html/body/div[1]/div/div/div[2]/form/button")
    }
    get errorMessageDiv() {
        return cy.get('.errorMessage')
    }
    checkExistenceandVisibilityOfElements() {
        checkExistenceandVisibility(this.FirstNameTextBox)
        checkExistenceandVisibility(this.LastNameTextBox)
        checkExistenceandVisibility(this.EmailAddressTextBox)
        //checkExistenceandVisibility(this.RoleDropdown)
        checkExistenceandVisibility(this.PasswordTextBox)
        checkExistenceandVisibility(this.RepeatPasswordTextBox)
        checkExistenceandVisibility(this.ContinueButton)
        checkExistenceandVisibility(this.ContinueWithGoogleButton)
        checkExistenceandVisibility(this.ContinueWithLinkedInButton)
        checkExistenceandVisibility(this.LoginButton)
    }
    SignUp(talent) {
        if (talent.firstName !== "") {
            this.FirstNameTextBox.clear().type(talent.firstName)
        }
        if (talent.lastName !== "") {
            this.LastNameTextBox.clear().type(talent.lastName)
        }
        if (talent.emailAddress !== "") {
            this.EmailAddressTextBox.clear().type(talent.emailAddress)
        }
        if (talent.role !== "") {
            this.RoleDropdown.click({force:true})
            cy.get('.rc-virtual-list-holder-inner').invoke("show")
            cy.get(".ant-select-item-option-content").eq(0).click({ force: true })
        }
        if (talent.password !== "") {
            this.PasswordTextBox.clear().type(talent.password)
            this.RepeatPasswordTextBox.clear().type(talent.password)
        }
        this.ContinueButton.click({force:true})
    }
}
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

    signInViaGoogle(talent) {
        this.ContinueWithGoogleButton.click({ force: true })
        cy.wait(4500)
        cy.window().then((newWin) => {
            // You now have access to the new window
            cy.wrap(newWin).within(() => {
                // Perform actions in the new window
                cy.xpath('//*[@id="view_container"]/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div/div/ul/li[3]/div').click({ force: true })

            });
        });

        // Switch back to the original window (the parent window)
        cy.window().then((parentWin) => {
            // Perform assertions or interactions in the parent window
            cy.wrap(parentWin).contains('Continue with your application').should('be.visible');
        });

    }

    signInViaLinkedIn() {
        this.ContinueWithLinkedInButton.click({ force: true })
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
            checkExistenceandVisibility(this.FirstNameTextBox)
            this.FirstNameTextBox.clear().type(talent.firstName, { force: true })
        }
        if (talent.lastName !== "") {
            checkExistenceandVisibility(this.LastNameTextBox)
            this.LastNameTextBox.clear().type(talent.lastName, { force: true })
        }
        if (talent.emailAddress !== "") {
            checkExistenceandVisibility(this.EmailAddressTextBox)
            this.EmailAddressTextBox.clear().type(talent.emailAddress, { force: true })
        }
        if (talent.role !== "") {
            // checkExistenceandVisibility(this.RoleDropdown)
            this.RoleDropdown.click({ force: true })
            cy.get('.rc-virtual-list-holder-inner').invoke("show")
            cy.get(".ant-select-item-option-content").eq(0).click({ force: true })
        }
        if (talent.password !== "") {
            checkExistenceandVisibility(this.PasswordTextBox)
            checkExistenceandVisibility(this.RepeatPasswordTextBox)
            this.PasswordTextBox.clear().type(talent.password, { force: true })
            this.RepeatPasswordTextBox.clear().type(talent.password, { force: true })
        }
        this.ContinueButton.click({ force: true })
    }
}
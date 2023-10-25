import { Talent } from "./Talent";
import 'cypress-xpath';

export class SignUpPage{
    constructor(){
        const talent = new Talent()
    }
    getContinueWithGoogleButton(){
        return cy.xpath("/html/body/div[1]/div/div/div[2]/div[1]/button[1]")
    }
    getContinueWithLinkedInButton(){
        return cy.xpath("/html/body/div[1]/div/div/div[2]/div[1]/button[2]")
    }
    getFirstNameTextBox()
    {
        return cy.xpath("/html/body/div[1]/div/div/div[2]/form/label[1]/input")
    }
    getLastNameTextBox()
    {
        return cy.xpath("/html/body/div[1]/div/div/div[2]/form/label[2]/input")
    }
    getEmailAddressTextBox(){
        return cy.xpath("/html/body/div[1]/div/div/div[2]/form/label[3]/input")
    }
    getRoleDropdown(){
        return cy.xpath("/html/body/div[1]/div/div/div[2]/form/label[4]/div/div/span[1]/input")
    }
    getPasswordTextBox(){
        return cy.xpath("/html/body/div[1]/div/div/div[2]/form/label[5]/input")
    }
    getRepeatPasswordTextBox(){
        return cy.xpath("/html/body/div[1]/div/div/div[2]/form/label[6]/input")
    }
    getContinueButton(){
        return cy.xpath("/html/body/div[1]/div/div/div[2]/form/button")
    }
    
    SignUp(talent){
        this.getFirstNameTextBox().type(talent.firstName)
        this.getLastNameTextBox().type(talent.lastName)
        this.getEmailAddressTextBox().type(talent.emailAddress)
        
        this.getRoleDropdown().click()
        cy.get('.rc-virtual-list-holder-inner').invoke("show")
        cy.get(".ant-select-item-option-content").eq(0).click({force:true})

        this.getPasswordTextBox().type(talent.password)
        this.getRepeatPasswordTextBox().type(talent.password)
        this.getContinueButton().click()
    }
}
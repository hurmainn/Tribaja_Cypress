import { Talent } from "C:\\Users\\dell\\CYPRESS PROJECTS\\FOLIUM AI\\TRIBAJA\\cypress\\Classes\\Talent.js"
export class SignUpPage{
    constructor(){
        const talent = new Talent(
            "John",
            "Doe",
            "john.doe@example.com",
            "Developer",
            "password123"
          );
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
    
    inputSignUpDetails(talent){
        this.getEmailAddressTextBox().type)
    }
}
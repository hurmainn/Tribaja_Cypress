import { LoginPage } from "../../Classes/LoginPage"
import { Onboarding } from "../../Classes/OnboardingPages"
import { SignUpPage } from "../../Classes/SignUpPage"
import { Talent } from "../../Classes/Talent"
import { getmyCookie } from "../../utils/getMyCookie"

// cy.fixture('example.json').then((user)=>{
//   const User=user;
// })


let url1 = ""
const loginPage = new LoginPage()
const signUpPage = new SignUpPage()
const onboarding = new Onboarding()
const talent1 = new Talent("Hurmain", "Javaid", "hurmain.javed@folium.ai", "Talent", "lilly1234")
const talent2=new Talent("Hurmain", "Javaid", "hurmain.javed+1234@folium.ai", "Talent", "lilly1234")


describe('SignUp AS TALENT', () => {
  it.skip('SignUp with all valid inputs', () => {
    cy.visit('https://app.staging.tribaja.co/')
    signUpPage.SignUp(talent1)
    cy.pause()
    cy.wait(8000)
  })
  it.skip("Logging in after signing up", () => {
    cy.visit('https://app.staging.tribaja.co/')
    cy.xpath('/html/body/div[1]/div/div/div[1]/a').as('LoginButton')
    cy.get('@LoginButton').click({ force: true })
    loginPage.LogIn(talent1)
    cy.wait(3500)
    //onboarding if user is logging in for the first time
    //cy.url().should('include', 'onboarding')  //check if we have reached the correct url
    //after reaching url
    cy.url().then((url) => {
      if (url.includes('onboarding')) {
        onboarding.getGetStartedButton().should('be.enabled') //check if button is clickable
          .click({ force: true })
        //talent has 9 questions
        for (let questionNumber = 1; questionNumber < 10; questionNumber++) {
          onboarding.fillOnboardingDetails(questionNumber)
        }
        //check for the exact page after filling the onboarding details correctly
        cy.contains('.btn-primary').should('include.text', 'Go to Dashboard')  //means we have completed onboading
        cy.log("ONBOARIDNG COMPLETED")
        cy.get('.btn-primary').click({ force: true })
      }
      else {
        //Proceed for the dashboard flow here
        expect(url).to.include('dashboard')
      }
    })


  })

  it("Sign Up another user",()=>{
    cy.visit('https://app.staging.tribaja.co/')
    signUpPage.SignUp(talent2)
    cy.pause()
  })

  it("Login another user",()=>{
    cy.visit('https://app.staging.tribaja.co/')
    cy.xpath('/html/body/div[1]/div/div/div[1]/a').as('LoginButton')
    cy.get('@LoginButton').click({ force: true })
    loginPage.LogIn(talent2)
    cy.wait(3500)
    //onboarding if user is logging in for the first time
    //cy.url().should('include', 'onboarding')  //check if we have reached the correct url
    //after reaching url
    cy.url().then((url) => {
      if (url.includes('onboarding')) {
        onboarding.getGetStartedButton().click({ force: true })
        //talent has 9 questions
        for (let questionNumber = 1; questionNumber < 10; questionNumber++) {
          onboarding.fillOnboardingDetails(questionNumber)
        }
        //check for the exact page after filling the onboarding details correctly
        //cy.should('contain', 'Go to Dashboard')
        // cy.contains('.btn-primary').should('include.text', 'Go to Dashboard')  //means we have completed onboading
        // cy.log("ONBOARIDNG COMPLETED")
        cy.get('.btn-primary').click({ force: true })
      }
      else {
        //Proceed for the dashboard flow here
        expect(url).to.include('dashboard')
      }
    })


  })
})
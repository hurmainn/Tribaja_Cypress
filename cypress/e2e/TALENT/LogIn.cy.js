import { LoginPage } from "../../Classes/LoginPage"
import { Onboarding } from "../../Classes/OnboardingPages"
import { SignUpPage } from "../../Classes/SignUpPage"
import { Talent } from "../../Classes/Talent"
import { getmyCookie } from "../../utils/getAllCookies"


let url1 = ""
const loginPage = new LoginPage()
const onboarding = new Onboarding()


describe('LOGIN AS TALENT', () => {
  let talentDataa;
  before(() => {
    cy.setTalentDataFromFixture();
    cy.getTalentData().then((talentData) => {
      talentDataa = talentData;
      // cy.log(talentss)
    });
  })
  it("Logging in - Valid Credentials", () => {
    cy.visit('https://app.staging.tribaja.co/')
    const talent = talentDataa.talents[3]; //signing up user 1, if i will want all users to sign up , i will just use for loop
    loginPage.LogIn(talent)

    cy.url().then((url) => {
      if (url.includes('onboarding')) {
        onboarding.getGetStartedButton()//check if button is clickable
          .click({ force: true })
        //talent has 9 questions
        for (let questionNumber = 1; questionNumber < 10; questionNumber++) {
          onboarding.fillOnboardingDetails(questionNumber)
        }
        cy.log("ONBOARDING COMPLETED")
        //expect the page to contain go to dashboard button
        cy.get('.btn-primary').should('exist').click()
          .then(() => {
            cy.wait(3500)
            cy.url().then((url1)=>{
              expect(url1).to.include('dashboard')
            })
          })
      }
      else {
        //Proceed for the dashboard flow here
        expect(url).to.include('dashboard')
      }
    })
  })
})
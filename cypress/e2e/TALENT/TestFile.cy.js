import { LoginPage } from "../../Classes/LoginPage"
import { Onboarding } from "../../Classes/OnboardingPages"
import { SignUpPage } from "../../Classes/SignUpPage"
import { Talent } from "../../Classes/Talent"
import { Dashboard } from "../../Classes/Dashboard"
import { Profile } from "../../Classes/Profile"
import { setLocalStorageItem, getLocalStorageItem } from "../../utils/localStorageUtil"
import { setMyCookie } from "../../utils/setAllCookies"
import { getmyCookie } from "../../utils/getAllCookies"
const loginPage = new LoginPage()
const onboarding = new Onboarding()
const dashboard = new Dashboard()
const profile = new Profile()
describe('LOGIN AS TALENT', () => {
    let talentDataa;
    let updateTalentDataa;
    let myCookie;
    let storedCookie;
    let talent;
    before(() => {
        cy.viewport(2500, 1399)
        cy.setTalentDataFromFixture();
        cy.setUpdateTalentDataFromFixture();
        cy.getTalentData().then((talentData) => {
            talentDataa = talentData;
            talent = talentDataa.talents[3];
            cy.visit('https://app.staging.tribaja.co/').then(() => {
                loginPage.LogIn(talent)
                cy.wait(7000)
            })
            //signing up user 1, if i will want all users to sign up , i will just use for loop

            // dashboard.CheckTalentDashboardUrl() //successfull login
            cy.wait(3000)
            cy.getCookie('access-token', { timeout: 10000 }).should('exist');
            cy.getCookie('access-token').then((cookie) => {
                if (cookie) {
                    myCookie = cookie.value
                    storedCookie = setMyCookie('access-token', myCookie)
                }
                else {
                    cy.log('session id doesnt exist')
                }
            })
            cy.log(myCookie)
            console.log(myCookie)
            cy.log(storedCookie)
            // cy.log(talentss)
        });
        cy.getUpdateTalentData().then((updateTalentData) => {
            updateTalentDataa = updateTalentData;
        });

    })

    it("Login", () => {
        cy.log(storedCookie)
        // cy.visit('https://app.staging.tribaja.co/dashboard', {
        //     onBeforeLoad: function (window) {
        //         cy.setCookie('access-token', storedCookie)
        //     }
        // })
        cy.setCookie('access-token', storedCookie).then(() => {
            cy.visit('https://app.staging.tribaja.co/')
        })
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
                        cy.url().then((url1) => {
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
it.skip("Second Test Profile", () => {
    // cy.setCookie('access-token',storedCookie).then(()=>{
    cy.visit('https://app.staging.tribaja.co/dashboard')
    const updateTalent = updateTalentDataa.updatetalents[0]
})


//profile.CheckTalentProfileUrl()
//profile.TestProfileForElementsExistence()
//profile.TestButtonsEnability()

//1. single comprehensive end to end user scenario where user updates all information at once
//2. separate functions for each information update

// profile.EditProfile(updateTalent)



import { LoginPage } from "../../Classes/LoginPage"
import { Onboarding } from "../../Classes/OnboardingPages"
import { SignUpPage } from "../../Classes/SignUpPage"
import { Talent } from "../../Classes/Talent"

import { Dashboard } from "../../Classes/Dashboard"
import { Profile } from "../../Classes/Profile"
const loginPage = new LoginPage()
const onboarding = new Onboarding()
const dashboard = new Dashboard()
const profile = new Profile()
describe('LOGIN AS TALENT', () => {
    let talentDataa;
    let updateTalentDataa;
    let talent;
    let uniqueurl;
    let storedCookie;
    let stored_access_token;
    let stored_role;
    let stored_refresh_token;
    let stored_boarding_completed;
    let uniqueid;
    before(() => {
        cy.viewport(2500, 1399)
        cy.setTalentDataFromFixture();
        cy.setUpdateTalentDataFromFixture();
        cy.getTalentData().then((talentData) => {
            talentDataa = talentData;

            // cy.log(talentss)
        });
        cy.getUpdateTalentData().then((updateTalentData) => {
            updateTalentDataa = updateTalentData;
        });
        cy.visit('https://app.staging.tribaja.co')
    })
    it("Login", () => {
        cy.visit('https://app.staging.tribaja.co/')
        talent = talentDataa.talents[4]; //signing up user 1, if i will want all users to sign up , i will just use for loop
        loginPage.LogIn(talent)
        cy.wait(5000)
        cy.getAllCookies(() => {

        });

        cy.getCookie('access-token').then((cookie) => {
            stored_access_token = cookie.value
            cy.log("stored_access_token", stored_access_token)
        })
        cy.getCookie('role').then((cookie) => {
            stored_role = cookie.value
            cy.log("role", stored_role)
        })
        cy.getCookie('refresh-token').then((cookie) => {
            stored_refresh_token = cookie.value
            cy.log("stored_refresh_token", stored_refresh_token)
        })
        cy.getCookie('boarding-completed').then((cookie) => {
            stored_boarding_completed = cookie.value
            cy.log("stored_access_token", stored_boarding_completed)
        })
    })
    it('Onboarding', () => {

        cy.log("cookies: ", stored_access_token, stored_refresh_token, stored_role, stored_boarding_completed)
        cy.setCookie('access-token', stored_access_token)
        cy.setCookie('refresh-token', stored_refresh_token)
        cy.setCookie('role', stored_role)
        cy.setCookie('boarding-completed', stored_boarding_completed)
        cy.then(() => {
            cy.visit('https://app.staging.tribaja.co/')
        })
        cy.wait(5000)

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
    // it('Dashboard', () => {
    //     // cy.visit('https://app.staging.tribaja.co/dashboard')
    //     dashboard.CheckUserDetailsInDashboard(talent)
    //     dashboard.ViewProfile(talent)
    // })
    // it("View Profile", () => {
    //     cy.log(uniqueid)
    //     cy.visit('https://app.staging.tribaja.co/profile/talent/')
    //     //check if the user has logged in with the same details
    //     //**DO LATER: check session storage here so that we know it's the same user
    //     //check the details before editing - should be same with which the user logged in
    //     dashboard.CheckUserDetailsInDashboard(talent)
    //     profile.CheckUserDetailsInProfileView(talent)
    //     dashboard.ViewProfile()
    //     profile.VerifyPassionIndustry("Apps and Mobile")
    //     //profile.CheckTalentProfileUrl()
    //     //profile.TestProfileForElementsExistence()
    //     //profile.TestButtonsEnability()

    //     //1. single comprehensive end to end user scenario where user updates all information at once
    //     //2. separate functions for each information update
    //     const updateTalent = updateTalentDataa.updatetalents[0]
    //     // profile.EditProfile(updateTalent)
    // })
    // it("Edit Profile", () => {

    // })
})

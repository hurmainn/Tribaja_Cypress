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
    })
    beforeEach(() => {
        cy.visit('https://app.staging.tribaja.co/')
        talent = talentDataa.talents[3]; //signing up user 1, if i will want all users to sign up , i will just use for loop
        loginPage.LogIn(talent)
        cy.wait(7000)
        //dashboard.CheckTalentDashboardUrl()
        // dashboard.ViewProfile(talent)
        //     cy.url().then((url) => {
        //         cy.log(url)
        //         uniqueurl = url;
        //         const parts = url.split("talent/");
        //         if (parts.length === 2) {
        //             uniqueid = parts[1];
        //             console.log(uniqueid);
        //         } else {
        //             console.log("URL format is not as expected.");
        //         }  
        // })

    })
    it('Dashboard', () => {
       // cy.visit('https://app.staging.tribaja.co/dashboard')
        dashboard.CheckUserDetailsInDashboard(talent)
        dashboard.ViewProfile(talent)
    })
    it("View Profile", () => {
        cy.log(uniqueid)
        cy.visit('https://app.staging.tribaja.co/profile/talent/')
        //check if the user has logged in with the same details
        //**DO LATER: check session storage here so that we know it's the same user

        //check the details before editing - should be same with which the user logged in
        dashboard.CheckUserDetailsInDashboard(talent)
        profile.CheckUserDetailsInProfileView(talent)
        dashboard.ViewProfile()
        profile.VerifyPassionIndustry("Apps and Mobile")
        //profile.CheckTalentProfileUrl()
        //profile.TestProfileForElementsExistence()
        //profile.TestButtonsEnability()

        //1. single comprehensive end to end user scenario where user updates all information at once
        //2. separate functions for each information update
        const updateTalent = updateTalentDataa.updatetalents[0]
        // profile.EditProfile(updateTalent)
    })

})
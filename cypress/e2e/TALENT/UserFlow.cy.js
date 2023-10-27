import { LoginPage } from "../../Classes/LoginPage"
import { Onboarding } from "../../Classes/OnboardingPages"
import { SignUpPage } from "../../Classes/SignUpPage"
import { Talent } from "../../Classes/Talent"
import { getmyCookie } from "../../utils/getMyCookie"
import { Dashboard } from "../../Classes/Dashboard"
import { Profile } from "../../Classes/Profile"
const loginPage = new LoginPage()
const onboarding = new Onboarding()
const dashboard = new Dashboard()
const profile = new Profile()
describe('LOGIN AS TALENT', () => {
    let talentDataa;
    let updateTalentDataa;
    before(() => {
        cy.viewport(2500, 1399)
        cy.setTalentDataFromFixture();
        cy.setUpdateTalentDataFromFixture();
        cy.getTalentData().then((talentData) => {
            talentDataa = talentData;
            // cy.log(talentss)
        });
        cy.getUpdateTalentData().then((updateTalentData)=>{
            updateTalentDataa=updateTalentData;
        });
    })
    it("View Profile", () => {
        cy.visit('https://app.staging.tribaja.co/')
        const talent = talentDataa.talents[3]; //signing up user 1, if i will want all users to sign up , i will just use for loop
        loginPage.LogIn(talent)
        //check if the user has logged in with the same details
        //**DO LATER: check session storage here so that we know it's the same user

        //check the details before editing - should be same with which the user logged in
       // dashboard.CheckUserDetailsInDashboard(talent)
       // profile.CheckUserDetailsInProfileView(talent)
        cy.wait(7000)
        dashboard.CheckTalentDashboardUrl()
        dashboard.ViewProfile()
        profile.VerifyPassionIndustry("Apps and Mobile")
        //profile.CheckTalentProfileUrl()
        //profile.TestProfileForElementsExistence()
        //profile.TestButtonsEnability()

        //1. single comprehensive end to end user scenario where user updates all information at once
        //2. separate functions for each information update
        const updateTalent=updateTalentDataa.updatetalents[0]
       // profile.EditProfile(updateTalent)
    })
   
})
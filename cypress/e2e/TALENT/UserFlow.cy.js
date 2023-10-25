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
    before(() => {
        cy.viewport(2500, 1399)
        cy.setTalentDataFromFixture();
        cy.getTalentData().then((talentData) => {
            talentDataa = talentData;
            // cy.log(talentss)
        });
    })
    it("Edit Profile", () => {
        cy.visit('https://app.staging.tribaja.co/')
        const talent = talentDataa.talents[3]; //signing up user 1, if i will want all users to sign up , i will just use for loop
        loginPage.LogIn(talent)
        cy.wait(7000)
        dashboard.CheckTalentDashboardUrl()
        dashboard.ViewProfile()
        profile.CheckTalentProfileUrl()
        // profile.TestProfileForElementsExistence()
        // profile.TestButtonsEnability()
        profile.EditProfile()
    })
})
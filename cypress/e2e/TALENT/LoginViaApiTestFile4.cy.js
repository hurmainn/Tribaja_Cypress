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
    let talent;
    let updateTalentDataa;
    let accessToken;
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
    it("LOGIN", () => {
        // // cy.visit('https://app.staging.tribaja.co/')
        // // talent = talentDataa.talents[0]; //signing up user 1, if i will want all users to sign up , i will just use for loop
        // cy.request("POST", "https://api.staging.tribaja.co/api/accounts/login/", {
        //     email: "hurmain.javed+90@folium.ai", password: "lilly1234"
        // }).then(function (response) {
        //     expect(response.status).to.eq(200);
        //     // Cypress.env('access', response.body.access);
        //     accessToken = response.body.access;
        // })

        // cy.then(() => {
        //     cy.visit('https://app.staging.tribaja.co/', {
        //         onBeforeLoad: function (window) {
        //             cy.setCookie('access-token', accessToken);
        //         }
        //     });
        // });

        // Use cy.request to make the login request
        cy.request("POST", "https://api.staging.tribaja.co/api/accounts/login/", {
            email: "hurmain.javed+90@folium.ai",
            password: "lilly1234"
        }).then(function (response) {
            expect(response.status).to.eq(200);
            accessToken = response.body.access;
            Cypress.env('access', accessToken)
            // Use cy.setCookie in a subsequent .then() block to set the cookie after the request is complete
            cy.then(() => {
                cy.setCookie('access-token', accessToken);
            });
        });

        // Use cy.visit after the login request and cookie are set
        cy.then(() => {
            cy.getCookie('access-token').then((cookie) => {
                cy.log("cookie value: ", cookie.value)
                cy.log("Accesss token: ", accessToken)
                expect(cookie.value).to.eq(accessToken)
            })
            cy.visit('https://app.staging.tribaja.co/');

        });

        // Perform additional actions on the logged-in page, if needed.
        // profile.EditProfile(updateTalent)
    })

    it("Second test", () => {
        cy.setCookie('access-token', accessToken).then(() => {
            //cy.wait(6000)
            cy.visit('https://app.staging.tribaja.co/');
            cy.wait(20000)
            dashboard.CheckTalentDashboardUrl()
            dashboard.ViewProfile()
        })
    })

    // it("Third Test", () => {
    //     profile.VerifyPassionIndustry("Apps and Mobile")
    // })
    // after(()=>{
    //     dashboard.LogOut(talent)
    // })
})
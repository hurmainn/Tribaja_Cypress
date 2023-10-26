import { SignUpPage } from "../../Classes/SignUpPage"
import { Talent } from "../../Classes/Talent"
//import 'cypress/support/commands.js'
const signUpPage = new SignUpPage()

const talent1 = new Talent("Hurmain", "Javaid", "hurmain.javed@folium.ai", "Talent", "lilly1234")
const talent2 = new Talent("Hurmain", "Javaid", "hurmain.javed+12345@folium.ai", "Talent", "lilly1234")
let talentDataFromFile;
describe("SIGN UP", () => {
    let talentDataa;
    before(() => {
        cy.setTalentDataFromFixture();
        cy.getTalentData().then((talentData) => {
           // cy.log(talentData)
          talentDataa = talentData;
          // cy.log(talentss)
        });
    })
    it('SignUp with all valid inputs', () => {
        cy.visit('https://app.staging.tribaja.co/')
        const talent = talentDataa.talents[3]; //signing up user 1, if i will want all users to sign up , i will just use for loop
        signUpPage.SignUp(talent)
    })
})
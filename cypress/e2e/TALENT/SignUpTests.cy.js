import { SignUpPage } from "../../Classes/SignUpPage";

describe("SIGN UP", () => {
    const signUpPage = new SignUpPage()
    let talentDataa;
    let talent;
    before(() => {
        cy.setTalentDataFromFixture();
        cy.getTalentData().then((talentData) => {
            talentDataa = talentData;
        })
    })
    beforeEach(() => {
        cy.viewport(2500, 1399)
        cy.visit('https://app.staging.tribaja.co/')
        talent = talentDataa.talents[0];
    })
    context('POSIITVE SCENARIOS', () => {
        it('ALL VALID INPUTS',()=>{
            cy.log(talent.emailAddress)
        })
    })
    context('NEGATIVE SCENARIOS', () => {

    })
})
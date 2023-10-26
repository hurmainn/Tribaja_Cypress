cy.setTalentDataFromFixture();
cy.getTalentData().then((talentData) => {
    talentDataa = talentData;
})
export const getFullTalentName = (talentDataa) => {
    const fullName = talentDataa.firstName + ' ' + talentDataa.lastName
    return fullName
}
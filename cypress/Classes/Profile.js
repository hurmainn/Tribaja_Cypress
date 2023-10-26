import { Dashboard } from "./Dashboard"
import { EditProfileForm } from "./EditProfileForm"
let editProfileForm = new EditProfileForm()
let dashboard = new Dashboard()
export class Profile {
    //get elements
    get PublicViewButton() {
        return cy.xpath('/html/body/div[1]/div/div/div[2]/div/div[2]/div[2]/div[2]/button[1]')
    }
    get EditProfileButton() {
        return cy.get('button').contains('Edit Profile')
    }
    get ProfilePictureDiv() {
        return cy.get('[role="img"]')
    }
    get LookingForWorkSpan() {
        return cy.get('#ProfileTopSectionDiv > div:nth-child(1) > div:nth-child(1) > span.ant-tag.ant-tag-has-color.css-8ynhv9')
    }
    get OverViewTextDiv() {
        return cy.get('#tabs-tab-overview')
    }
    get MyMentorsTextDiv() {
        return cy.get('#tabs-tab-mentors')
    }

    get AboutDiv() {
        return cy.get('#About')
    }

    get OpenToDiv() {
        return cy.get('[id="Open to"]')
    }

    get ExperienceDiv() {
        return cy.get('#Experience')
    }

    get EducationDiv() {
        return cy.get('#Education')
    }

    get SkillsDiv() {
        return cy.get('#Skills')
    }

    get IndustriesDiv() {
        return cy.get('#Industries')
    }

    get ExpertiseDiv() {
        return cy.xpath('//*[@id="Experties"]')
    }

    get CertificationsDiv() {
        return cy.get('#Certifications')
    }

    get OpportunitiesDiv() {
        return cy.get('#opportunities')
    }

    get JobsDiv() {
        return cy.get('#job')
    }

    get EventsDiv() {
        return cy.get('#events')
    }

    get JobTiles() {
        return cy.get('.job-tile')
    }

    get ApplyToJobButtonsInJobTiles() {
        return cy.get('.job-tile').find('button:nth-child(1)')
    }
    get ViewJobButtonInJobTiles() {
        return cy.get('.job-tile').find('button:nth-child(2)')
    }

    get UserNameDivInProfileView() {
        return cy.get('#ProfileTopSectionDiv p:nth-child(1)')
    }

    //methods
    CheckTalentProfileUrl() {
        cy.url().then((url) => { expect(url).to.include('/profile/talent/') })
    }
    TestElement(element, text) {
        if (text !== null) { element.should('exist').should('contain', text); }
        else {
            element.should('exist')
        }
    }
    TestProfileForElementsExistence() {
        //  this.TestElement(this.PublicViewButton, 'View')
        this.TestElement(this.EditProfileButton, 'Edit Profile')
        this.TestElement(this.ProfilePictureDiv, null)
        this.TestElement(this.LookingForWorkSpan, 'Looking for work')
        this.TestElement(this.OverViewTextDiv, 'Overview')
        this.TestElement(this.MyMentorsTextDiv, 'My Mentors')
        this.TestElement(this.AboutDiv, 'About')
        this.TestElement(this.OpenToDiv, 'Open to')
        this.TestElement(this.ExperienceDiv, 'Experience')
        this.TestElement(this.EducationDiv, 'Education')
        this.TestElement(this.SkillsDiv, 'Skills')
        this.TestElement(this.IndustriesDiv, 'Industries')
        //   this.TestElement(this.ExpertiseDiv, 'Expertise')
        this.TestElement(this.CertificationsDiv, 'Certifications')
        this.TestElement(this.OpportunitiesDiv, 'Opportunities and Resources that Match My Profile')
        this.TestElement(this.JobsDiv, 'Jobs')
        this.TestElement(this.EventsDiv, 'Events')
        this.TestElement(this.JobTiles, 'Apply')
        this.TestElement(this.ApplyToJobButtonsInJobTiles, 'Apply')
        this.TestElement(this.ViewJobButtonInJobTiles, 'View Job')

    }
    TestButtonsEnability() {
        this.PublicViewButton.should('not.have.class', 'disabled')
        this.EditProfileButton.should('not.have.class', 'disabled')
        this.ApplyToJobButtonsInJobTiles.should('not.have.class', 'disabled')
        this.ViewJobButtonInJobTiles.should('not.have.class', 'disabled')
    }

    CheckUserName(talent) {
        const fullName = talent.firstName + ' ' + talent.lastName;
        this.UserNameDivInProfileView.invoke('text')
            .then((text) => {
                expect(text).to.equal(fullName)
            })
    }
    //user details in profile view
    CheckUserDetailsInProfileView(talent) {
        cy.url().then((url) => {
            if (!url.includes('profile/talent/')) {
                dashboard.ViewProfile()
            }
        })
        this.CheckUserName(talent)
    }
    //verification functions for updated values
    VerifyfullName() {

    }
    VerifyGender() {

    }
    VerifyPronouns() {

    }
    VerifyEthnicity() {

    }
    VerifyCountry() {

    }
    VerifyCity() {

    }
    VerifyPhoneNumber() {

    }
    VerifyBio() {

    }

    //in experience and education
    VerifySkills() {

    }
    VerifyExperienceLevel() {

    }
    VerifyPassionIndustry() {

    }
    VerifyTechnologiesList() {

    }
    VerifyEducationLevel() {

    }
    VerifyInstituteNameInEducation() {

    }
    VerifyDegreeName() {

    }
    VerifyStartYear() {

    }
    VerifyEndYear() {

    }

    VerifyCompanyName() {

    }
    VerifyRoleInCompany() {

    }
    VerifyStartDateInCompany() {

    }
    VerifyEndDateInCompany() {

    }

    VerifyCertificateName() {

    }
    VerifyInstituteNameInCertification() {

    }
    VerifyCredentials() {

    }


    //in links
    VerifyLinkedIn() {

    }
    VerifyPortfolio() {

    }
    VerifyGitHub() {

    }
    VerifyTwitter() {

    }
    VerifyResume() {

    }

    VerifyWholeProfile() {

    }
    //edit whole profile
    EditProfile() {
        //before clicking
        this.EditProfileButton.click()
        cy.get('.modal').should('be.visible')
        editProfileForm.fillPersonalInfo()
        editProfileForm.fillExperienceAndEducationInfo()
        editProfileForm.fillLinksInfo()
        editProfileForm.submitForm()
        editProfileForm.exitForm()
    }
}
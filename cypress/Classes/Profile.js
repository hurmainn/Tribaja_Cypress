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
    get PronounsDiv() {
        return cy.xpath('//*[@id="ProfileTopSectionDiv"]/div[1]/div[2]/div[1]/p[2]')
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
    get ExperienceContainer() {
        return cy.get('#Experience >div>div')
    }

    get EducationDiv() {
        return cy.get('#Education')
    }
    get EducationContainer() {
        return cy.get('#Education>div>span')
    }
    get SkillsDiv() {
        return cy.get('#Skills')
    }

    get IndustriesDiv() {
        return cy.get('#Industries')
    }
    get IndustryCards() {
        return cy.get('#Industries #skills span')
    }
    get ExpertiseDiv() {
        return cy.xpath('//*[@id="Experties"]')
    }
    get ExpertiseCards() {
        return cy.get('#Experties span')
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
    get SocialMediaIcons() {
        return cy.get('[id="Social Media Icons"] a')
    }
    get GithubIcon() {
        this.SocialMediaIcons.eq(0)
    }
    get TwitterIcon() {
        this.SocialMediaIcons.eq(1)
    }
    get LinkedInIcon() {
        this.SocialMediaIcons.eq(2)
    }
    get PortfolioIcon() {
        this.SocialMediaIcons.eq(3)
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
    VerifyfullName(fullName) {
        this.CheckUserName(fullName)
    }
    VerifyGender(gender) {

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
    VerifyBio(bio) {
        this.AboutDiv.invoke('text').then((text) => {
            expect(text).to.contain(bio)
        })
    }

    //in experience and education
    VerifySkills() {

    }
    VerifyExperienceLevel() {

    }
    VerifyPassionIndustry(industry) {
        const industryCardsArray = []
        this.IndustryCards.should('exist')
            .each(($card, index, $list) => {
                const cardText = $card.text();
                cy.log(cardText)
                industryCardsArray.push(cardText)
                cy.log(industryCardsArray)
            }).then(() => {
                cy.log(industryCardsArray)
                cy.wrap(industryCardsArray).should('include', industry)
            })

    }
    VerifyExpertise(expertise) {
        const expertiseCardsArray = []
        this.ExpertiseCards.should('exist')
            .each(($card, index, $list) => {
                const cardText = $card.text();
                cy.log(cardText)
                expertiseCardsArray.push(cardText)
            }).then(() => {
                cy.log(expertiseCardsArray)
                cy.wrap(expertiseCardsArray).should('include', expertise)
            })

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
    VerifyLinkedIn(linkedinurl) {
        this.LinkedInIcon.invoke('attr', 'href')
            .then((hrefValue) => {
                expect(hrefValue).to.equal(linkedinurl)
            })

    }
    VerifyPortfolio(portfoliourl) {
        this.PortfolioIcon.invoke('attr', 'href')
            .then((hrefValue) => {
                expect(hrefValue).to.equal(portfoliourl)
            })
    }
    VerifyGitHub(githuburl) {
        this.GithubIcon.invoke('attr', 'href')
            .then((hrefValue) => {
                expect(hrefValue).to.equal(githuburl)
            })
    }
    VerifyTwitter(twitterurl) {
        this.TwitterIcon.invoke('attr', 'href')
            .then((hrefValue) => {
                expect(hrefValue).to.equal(twitterurl)
            })
    }
    VerifyResume() {

    }
    VerifyWholeProfile() {

    }
    //edit whole profile
    EditProfile(talentt) {
        //before clicking
        this.EditProfileButton.click()
        cy.get('.modal').should('be.visible')
        editProfileForm.fillPersonalInfo(talentt)
        // editProfileForm.fillExperienceAndEducationInfo(talentt)
        // editProfileForm.fillLinksInfo(talentt)
        editProfileForm.submitForm(talentt)
        editProfileForm.exitForm(talentt)
    }
}
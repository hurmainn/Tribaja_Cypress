export class EditProfileForm {
    //getters
    //personal info
    get UpdateProfileImageTextDiv() {
        return cy.xpath('/html/body/div[1]/div/div/div[1]/div/div/div[2]/div[2]/div/div[1]/div/form/div/div/text()')
    }
    get PersonalInfoTextSpan() {
        return cy.get('[data-node-key="personal-info"]')
    }
    get ExpANDEducationTextSpan() {
        return cy.get('[data-node-key="exp-edu"]')
    }
    get LinksTextSpan() {
        return cy.get('[data-node-key="links"]')
    }

    get FullNameTextBox() {
        return cy.get('[name=full_name]')
    }
    get GenderDropDown() {
        return cy.xpath('/html/body/div[1]/div/div/div[1]/div/div/div[2]/div[2]/div/div[1]/div/form/label[2]/div/div/span[1]')
    }

    get PronounsDropDown() {
        return cy.xpath('/html/body/div[1]/div/div/div[1]/div/div/div[2]/div[2]/div/div[1]/div/form/label[3]/div/div/span[1]')
    }
    get EthnicityDropDown() {
        return cy.xpath('/html/body/div[1]/div/div/div[1]/div/div/div[2]/div[2]/div/div[1]/div/form/label[4]/div/div/span[1]')
    }

    get CountryDropDown() {
        return cy.xpath('/html/body/div[1]/div/div/div[1]/div/div/div[2]/div[2]/div/div[1]/div/form/label[5]/div/div/span[1]')
    }

    get StateDropDown() {
        return cy.xpath('/html/body/div[1]/div/div/div[1]/div/div/div[2]/div[2]/div/div[1]/div/form/label[6]/div/div/span[1]')
    }

    get CityDropDown() {
        return cy.xpath('/html/body/div[1]/div/div/div[1]/div/div/div[2]/div[2]/div/div[1]/div/form/label[7]/div/div/span[1]')
    }

    getPhoneNumberCountrySelectorDropDown() {
        return cy.xpath('/html/body/div[1]/div/div/div[1]/div/div/div[2]/div[2]/div/div[1]/div/form/label[8]/div/div[2]/div[2]/div')
    }
    get PhoneNumberInputBox() {
        return cy.get('#phone')
    }
    get BioTextBox() {
        return cy.get('[name="bio"]')
    }

    get SubmitButton() {
        return cy.xpath('/html/body/div[1]/div/div/div[1]/div/div/div[2]/div[2]/div/div[2]/div/form/button')
    }

    get ExitFormButton() {
        return cy.xpath('/html/body/div[1]/div/div/div[1]/div/div/div[1]/div/svg')
    }

    //exp and education
    get SkillsDropDown() {
        return cy.xpath('/html/body/div[1]/div/div/div[1]/div/div/div[2]/div[2]/div/div[2]/div/form/label[1]/div/div')
    }
    get ExperienceLevelDropDown() {
        return cy.xpath('/html/body/div[1]/div/div/div[1]/div/div/div[2]/div[2]/div/div[2]/div/form/label[2]/div/div/span[1]')
    }
    get PassionIndustryDropDown() {
        return cy.xpath('/html/body/div[1]/div/div/div[1]/div/div/div[2]/div[2]/div/div[2]/div/form/label[3]/div/div')
    }
    get TechnologiesUnlistedTextBox() {
        return cy.get('input[name="techList"]')
    }
    get EducationLevelDropDown() {
        return cy.xpath('/html/body/div[1]/div/div/div[1]/div/div/div[2]/div[2]/div/div[2]/div/form/label[5]/div/div/span[1]')
    }
    get InstituteNameTextBox() {
        return cy.xpath('/html/body/div[1]/div/div/div[1]/div/div/div[2]/div[2]/div/div[2]/div/form/label[6]/input')
    }
    get DegreeNameTextBox() {
        return cy.xpath('/html/body/div[1]/div/div/div[1]/div/div/div[2]/div[2]/div/div[2]/div/form/label[7]/input')
    }

    get StartYearTextBox() {
        return cy.get('input[name="startYear"]')
    }

    get EndYearTextBox() {
        return cy.get('input[name="endYear"]')
    }

    get AddMoreEducationTextDiv() {
        return cy.get('span').contains('Add More Education')
    }

    get CompanyNameTextBox() {
        return cy.get('input[name="company"]')
    }

    get RoleTextBox() {
        return cy.get('input[name="role"]')
    }

    get StartDateDropDown() {
        return cy.xpath('/html/body/div[1]/div/div/div[1]/div/div/div[2]/div[2]/div/div[2]/div/form/label[16]/div/div/span[2]')
    }

    get EndDateDropDown() {
        return cy.xpath('/html/body/div[1]/div/div/div[1]/div/div/div[2]/div[2]/div/div[2]/div/form/label[17]/div/div/span[2]')
    }

    get AddMoreExperienceTextDiv() {
        return cy.get('span').contains('Add More Experience')
    }

    get CertificateNameTextBox() {
        return cy.get('input[name="name"]')
    }

    get InstituteTextBox() {
        return cy.xpath('/html/body/div[1]/div/div/div[1]/div/div/div[2]/div[2]/div/div[2]/div/form/label[19]/input')
    }

    get CredentialsTextBox() {
        return cy.xpath('/html/body/div[1]/div/div/div[1]/div/div/div[2]/div[2]/div/div[2]/div/form/label[20]/input')
    }

    get AddMoreCertificateTextDiv() {
        return cy.get('span').contains('Add More Certificate')
    }

    //links
    get LinkedInTextBox() {
        return cy.get('input[name="linkedinurl"]')
    }

    get PortfolioTextBox() {
        return cy.get('input[name="website"]')
    }

    get GithubTextBox() {
        return cy.get('input[name="githuburl"]')
    }

    get TwitterTextBox() {
        return cy.get('input[name="twitter"]')
    }

    get UploadResumeDiv() {
        return cy.xpath('/html/body/div[1]/div/div/div[1]/div/div/div[2]/div[2]/div/div[3]/div/form/label[5]/div')
    }

    //methods
    fillPersonalInfo() {
        this.PersonalInfoTextSpan.click({ force: true })


    }
    fillExperienceAndEducationInfo() {
        this.ExpANDEducationTextSpan.click({ force: true })
    }

    fillLinksInfo() {
        this.LinksTextSpan.click({ force: true })
    }
    submitForm() {
        this.SubmitButton.click({ force: true })
    }
    exitForm() {
        this.ExitFormButton.click({ force: true })
    }
}
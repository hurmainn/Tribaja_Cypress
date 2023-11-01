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
    get GenderContainer() {
        return cy.get('.rc-virtual-list-holder-inner').eq(0)
    }
    get GenderContainerElements() {
        return cy.get('.rc-virtual-list-holder-inner')
    }
    get PronounsDropDown() {
        return cy.xpath('/html/body/div[1]/div/div/div[1]/div/div/div[2]/div[2]/div/div[1]/div/form/label[3]/div/div/span[1]')
    }
    get PronounsContainer() {
        return cy.xpath('/html/body/div[1]/div/div/div[1]/div/div/div[2]/div[2]/div/div/div/form/label[3]/div')
    }
    get PronounsContainerElements() {
        return cy.get('body > div:nth-child(7) > div > div > div.rc-virtual-list > div > div > div >div')
    }
    get EthnicityDropDown() {
        return cy.xpath('/html/body/div[1]/div/div/div[1]/div/div/div[2]/div[2]/div/div[1]/div/form/label[4]/div/div/span[1]')
    }
    get EthnicityContainer() {
        return cy.xpath('/html/body/div[6]/div')
    }
    get EthnictyContainerElements() {
        return cy.get('body > div:nth-child(8) > div > div > div.rc-virtual-list > div > div > div >div')
    }
    get CountryDropDown() {
        return cy.xpath('/html/body/div[1]/div/div/div[1]/div/div/div[2]/div[2]/div/div[1]/div/form/label[5]/div/div/span[1]')
    }
    get CountriesContainer() {
        return cy.get('.rc-virtual-list-holder-inner')
    }
    get CountriesContainerElements() {
        return cy.get('.rc-virtual-list-holder-inner .ant-select-item-option-content')   //returns only 6 countries, will find the required one through scrolling  into view in the function it is called 
    }
    get StateDropDown() {
        return cy.xpath('/html/body/div[1]/div/div/div[1]/div/div/div[2]/div[2]/div/div[1]/div/form/label[6]/div/div/span[1]')
    }
    get CityDropDown() {
        return cy.xpath('/html/body/div[1]/div/div/div[1]/div/div/div[2]/div[2]/div/div[1]/div/form/label[7]/div/div/span[1]')
    }

    get PhoneNumberCountrySelectorDropDown() {
        return cy.xpath('/html/body/div[1]/div/div/div[1]/div/div/div[2]/div[2]/div/div[1]/div/form/label[8]/div/div[2]/div[2]/div')
    }
    get PhoneNumberInputBox() {
        return cy.get('#phone')
    }
    get BioTextBox() {
        return cy.get('[name="bio"]')
    }

    get SubmitButton() {
        return cy.get('.modal button').eq(0)
    }

    get ExitFormButton() {
        return cy.get('.modal .editProfile__container:nth-child(1) svg[viewBox="0 0 24 24"]')

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

    //methods to update each single value
    //in personalInfo
    UpdatefullName(fullName) {
        this.FullNameTextBox.clear().type(fullName)
        // this.SubmitButton.click()
    }
    UpdateGender(gender) {
        this.GenderDropDown.click({ force: true })
        this.GenderContainer.should('be.visible')
        this.GenderContainerElements
            .each(($g, index, $list) => {
                const genderr = $g.text()
                cy.log(genderr)
                if (genderr === gender) {
                    cy.log(gender + "==" + genderr)
                    cy.wrap($g).click()
                    return false;  //exit the each loop
                }
                else {
                    cy.log("gender entered in the function: " + gender)
                }
            })
    }
    UpdatePronouns(pronouns) {
        this.PronounsDropDown.click({ force: true })
        this.PronounsContainer.should('be.visible')
        this.PronounsContainerElements
            .each(($p, index, $list) => {
                const pronounss = $p.text()
                cy.log(pronounss)
                if (pronounss === pronouns) {
                    cy.log(pronouns + "==" + pronounss)
                    cy.wrap($p).click()
                    return false;   //exit the each loop
                }
                else {
                    cy.log("pronouns entered in the function: " + pronouns)
                }
            })
    }
    UpdateEthnicity(ethnicity) {
        this.EthnicityDropDown.click()
        this.EthnicityContainer.should('be.visible')
        this.EthnictyContainerElements
            .each(($e, index, $list) => {
                const ethnicityy = $e.text()
                cy.log(ethnicityy)
                $e.contains(ethnicity).scrollIntoView('');
                if (ethnicity === ethnicityy) {
                    cy.log(ethnicity + "==" + ethnicityy)
                    //  cy.wrap($e).scrollIntoView();
                    cy.wrap($e).click()
                    return false;
                }
                else {
                    cy.log("Ethnicity entered in the function: " + ethnictity)

                }
            })
    }
    UpdateCountry(countryName) {
        this.CountryDropDown.click({ force: true })
        this.CountriesContainer.should('exist').invoke('show').should('be.visible').then(() => {

            const targetText = countryName
            let elementFound = false;
            cy.get('.rc-virtual-list-holder-inner').contains('targetText') // Replace with your target text
                .scrollIntoView();
            // cy.get('.rc-virtual-list-holder-inner').then(($dropdown) => {
            //     cy.wrap($dropdown).scrollTo('bottom');
            //     cy.contains(targetText).then(($element) => {
            //         if ($element.length > 0) {
            //             elementFound = true;
            //         }
            //     })
            // }).then(() => {
            //     if (elementFound) { cy.contains(targetText).click(); }
            // })

            // this.CountriesContainerElements
            //     .each(($c, index, $list) => {
            //         const countryNamee = $c.text()
            //         cy.log(countryNamee)
            //         cy.wrap($c).contains(countryName).scrollIntoView('');
            //         if (countryNamee === countryName) {
            //             cy.log(countryName + "==" + countryNamee)
            //             cy.wrap($c).scrollIntoView();
            //             cy.wrap($c).click()
            //             return false;
            //         }
            //         else {
            //             cy.log("Country name entered in the function: " + countryName)
            //         }
            //     })
        })
    }
    UpdateCity() {
        
    }
    UpdatePhoneNumber() {

    }
    UpdateBio() {

    }

    //in experience and education
    UpdateSkills() {

    }
    UpdateExperienceLevel() {

    }
    UpdatePassionIndustry() {

    }
    UpdateTechnologiesList() {

    }
    UpdateEducationLevel() {

    }
    UpdateInstituteNameInEducation() {

    }
    UpdateDegreeName() {

    }
    UpdateStartYear() {

    }
    UpdateEndYear() {

    }
    AddMoreEducation() {

    }
    UpdateCompanyName() {

    }
    UpdateRoleInCompany() {

    }
    UpdateStartDateInCompany() {

    }
    UpdateEndDateInCompany() {

    }
    AddMoreExperience() {

    }
    UpdateCertificateName() {

    }
    UpdateInstituteNameInCertification() {

    }
    UpdateCredentials() {

    }
    AddMoreCertificate() {

    }

    //in links
    UpdateLinkedIn() {

    }
    UpdatePortfolio() {

    }
    UpdateGitHub() {

    }
    UpdateTwitter() {

    }
    UploadResume() {

    }
    ClickSubmitButton() {

    }
    //methods
    fillPersonalInfo(talentt) {
        this.PersonalInfoTextSpan.click({ force: true })
        this.UpdatefullName(talentt.fullName)
        //this.UpdateGender(talentt.gender)
        // this.UpdatePronouns(talentt.pronoun)
        //this.UpdateEthnicity(talentt.ethnicity)
        this.UpdateCountry(talentt.country)
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
        cy.wait(1000)
        cy.get('.modal').should('not.exist')
    }
}
import { Talent } from "./Talent"
import { getFullName } from "../utils/getfullName"
export class Dashboard {

    get DropDownElement() {
        return cy.get('main > .profile__box-avatar')

    }
    get ProfileContainer() {
        return cy.get(".dashboardNavbar__profile-container")
    }
    get ViewProfileLink() {
        return cy.get(".dashboardNavbar__profile-container .profile__box-details a")
    }
    CheckTalentDashboardUrl() {
        cy.url().then((url) => { expect(url).to.include('dashboard') })
    }

    //details
    get ProfileNameDivInSideBar() {
        return cy.get('.sidebar p')
    }
    get ProfileNameDivInDashBoardDetails() {
        return cy.get('.dashboard__details-container-box p:nth-child(2)')
    }
    get WelcomeDivInDashBaordHeading() {
        return cy.get('.dashboard__details-heading')
    }
    CheckUserName(talent) {
        const welcomeText = "Welcome " + talent.firstName;
        const fullName = talent.firstName + ' ' + talent.lastName
        this.ProfileNameDivInSideBar.invoke('text')
            .then((text) => {
                expect(text).to.equal(fullName)
            })
        this.ProfileNameDivInDashBoardDetails.invoke('text')
            .then((text) => {
                expect(text).to.equal(fullName)
            })
        this.WelcomeDivInDashBaordHeading.invoke('text')
            .then((text) => {
                expect(text).to.include(welcomeText)
            })
    }
    CheckUserDetailsInDashboard(talent) {
        this.CheckUserName(talent)
    }
    ViewProfile() {
        this.DropDownElement.click()
        this.ProfileContainer.invoke('show').should('be.visible')
        this.ViewProfileLink.should('exist').click()
    }


}
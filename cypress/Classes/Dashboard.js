import { Talent } from "./Talent"

export class Dashboard {

    get DropDownElement() {
        return cy.get('main > .ant-avatar').invoke('show')

    }
    get ProfileContainer() {
        return cy.get(".dashboardNavbar__profile-container")
    }
    get ProfileBoxList(){
        return cy.get('.dashboardNavbar__profile-container .profile__box-list')
    }
    get ViewProfileLink() {
        return cy.get(".dashboardNavbar__profile-container .profile__box-details a")
    }
    get LogOutButton(){
        return cy.get('.dashboardNavbar__profile-container .profile__box-list a').eq(2)
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
    ViewProfile(talent) {
        this.DropDownElement.click()
        this.ProfileContainer.invoke('show').should('be.visible')
        this.ViewProfileLink.should('exist').click()
    }

    LogOut(talent) {
        this.DropDownElement.click()
        this.ProfileBoxList.invoke('show').should('be.visible')
        this.LogOutButton.click()
    }
}
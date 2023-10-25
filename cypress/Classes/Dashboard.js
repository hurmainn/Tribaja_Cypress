export class Dashboard {
    get DropDownElement() {
        return cy.get('main > .profile__box-avatar')

    }
    get ProfileContainer() {
        return cy.get(".dashboardNavbar__profile-container")
    }
    get ViewProfileLink(){
        return cy.get(".dashboardNavbar__profile-container .profile__box-details a")
    }
    CheckTalentDashboardUrl(){
        cy.url().then((url) => { expect(url).to.include('dashboard') })
    }
    ViewProfile() {
        this.DropDownElement.click()
        this.ProfileContainer.invoke('show').should('be.visible')
        this.ViewProfileLink.should('exist').click()
    }
    
}
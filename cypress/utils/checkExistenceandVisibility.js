export function checkExistenceandVisibility(element) {
    element
        .should('exist')
        .and('not.be.disabled')
        .and('be.visible')
}

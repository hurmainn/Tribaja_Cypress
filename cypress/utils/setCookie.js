export function setMyCookie(cookieName, value) {
    cy.setCookie(cookieName,value)
    const myCookie=value
    return value
}

// export function getMyCookie(){

// }

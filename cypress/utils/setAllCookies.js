export function setAllCookies(cookiesArray) {
    //SETTING COOKIES
    for (let i = 0; i < cookiesArray.length; i++) {
        const cookie = cookiesArray[i];
        cy.setCookie(cookie.name, cookie.value);
    }
}

// export function getMyCookie(){

// }

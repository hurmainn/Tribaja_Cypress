export const getAllCookies =  () => {
   const cookiesArray=[]
    cy.getAllCookies().then((cookies) => {
        cookies.forEach((cookie) => {
            const cookieObject = {
                name: cookie.name,
                value: cookie.value
            }
            cookiesArray.push(cookieObject)
        });
        cy.log(cookiesArray)
    });
    return cookiesArray
}
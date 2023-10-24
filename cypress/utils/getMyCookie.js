export const getmyCookie = async (cookiename) => {
    return cy.getCookie(cookiename)
        .then(async (c) => {
            if(c?.value){
                cy.log(c.value)
            }else{
                return
            }
            // return c.value
        })
}
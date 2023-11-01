export const setLocalStorageItem = (key, value) => {
    cy.window().then((win) => {
        const val=win.localStorage.setItem(key, value);
        cy.log(val)
    });
};

export const getLocalStorageItem = (key) => {
    return cy.window().then((win) => {
        return win.localStorage.getItem(key);
    });
};
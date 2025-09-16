// initialPage.js

//this page is for open different domen in same window in order to perform further test
class InitialPage {
    constructor() {
        this.locators = {
            loginLink: '.is-text-copy'   // update selector if needed
        };
    }

    getLoginLink() {
        return cy.get(this.locators.loginLink);
    }

    clickLoginLink() {
        // Ensure the link opens in the same tab
        this.getLoginLink().invoke('removeAttr', 'target').click();
    }
}

export default InitialPage;

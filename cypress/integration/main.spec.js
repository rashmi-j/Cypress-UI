import { Mainpage } from "../pages/main.page";

describe('Main page tests', () => {

    const mainPage = new Mainpage();

    it('Verify contents in main page',() => {
        cy.visit("https://rahulshettyacademy.com/");

    });

})


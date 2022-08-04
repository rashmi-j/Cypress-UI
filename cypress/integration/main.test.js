//import { MainPage } from "../pages/main.page";

describe('Main page tests', () => {

    const mainPage = new mainPage();

    it('Verify contents in main page',() => {
        cy.visit("https://rahulshettyacademy.com/");

    });

})


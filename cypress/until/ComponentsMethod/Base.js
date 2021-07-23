/// <reference types="cypress" />

class Base {

    preencher(locator, text) {
        cy.get(locator).type(text)
    }

    clicarElemento(locator) {
        cy.get(locator).click()
    }







}



export default Base
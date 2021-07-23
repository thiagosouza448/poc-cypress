/// <reference types="cypress" />
import Base from "../ComponentsMethod/Base";

const base = new Base()

class Cadastro extends Base {
    constructor() {
        super();
    }

    GetUrl() {
        cy.visit('http://demo.automationtesting.in/Register.html')
    }

    skillSelect(skill = String){
        cy.get('#Skills').select(skill)
    }

    countrySelect(country = String){
        cy.get('#countries').select(country)
    }

    selectDateBirth(year = String, mounth = String, day = String){
        cy.get('#yearbox').select(year)
        cy.get('select[placeholder="Month"]').select(mounth).should('have.value', mounth)
        cy.get('#daybox').select(day)
    }

}

export default Cadastro
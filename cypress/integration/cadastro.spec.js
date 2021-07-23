/// <reference types="cypress" />
import Base from "../until/ComponentsMethod/Base";
import Constants from "../until/constants/constants";
import Cadastro from "../until/pages/cadastroPage";
import CadastroObjects from '../until/PageObject/cadastroObjects';

const base = new Base()
const constants = new Constants()
const cadastro = new Cadastro()
const cadastroObjects = new CadastroObjects()



describe('Realizar cadastro com sucesso', () => {
    it('Dado que preencho nome e sobrenome', () => {
        cadastro.GetUrl()
        base.preencher(cadastroObjects.input_nome, constants.nome)
        base.preencher(cadastroObjects.input_sobrenome, constants.sobrenome)
    })
    it('E preencher o campo Address', () => {
        base.preencher(cadastroObjects.input_address, constants.caracteres_60)
    })
    it('E preencher o campo email, telefone e genero', () => {
        base.preencher(cadastroObjects.input_email, constants.email)
        base.preencher(cadastroObjects.input_phone, constants.phone)
        base.clicarElemento(cadastroObjects.genero_masculino)
    })
    it('E selecionar hobbie, linguagens e skills', () => {
        base.clicarElemento(cadastroObjects.hobbie_movies)
        base.clicarElemento(cadastroObjects.linguagens)
        base.clicarElemento(cadastroObjects.arabic_linguage)
        base.clicarElemento(cadastroObjects.genero_masculino)
        cadastro.skillSelect(constants.skill_default)
    })
    it('E escolho country, country select pesquisando ', () => {
        cadastro.countrySelect(constants.country_default)
        base.clicarElemento(cadastroObjects.select_country_input)
        base.preencher(cadastroObjects.search_country, constants.country_secundary)
        base.clicarElemento(cadastroObjects.result_search_option)
    })
    it('E seleciono a data de nascimento, senha e confirmação.', () => {
        cadastro.countrySelect(constants.country_default)
        base.clicarElemento(cadastroObjects.select_country_input)
        base.preencher(cadastroObjects.search_country, constants.country_secundary)
        base.clicarElemento(cadastroObjects.result_search_option)
        cadastro.selectDateBirth(constants.year, constants.mounth, constants.day)
        base.preencher(cadastroObjects.input_pass, constants.password)
        base.preencher(cadastroObjects.input_confirm_pass, constants.password)
    })
    it('Quando clicar no botao submit', () => {
        base.clicarElemento(cadastroObjects.btn_submit)
    })
})
/// <reference types="cypress" />


class CadastroObjects {

    input_nome = ':nth-child(1) > :nth-child(2) > .form-control'
    input_sobrenome = ':nth-child(1) > :nth-child(3) > .form-control'
    input_address = '.col-md-8 > .form-control'
    input_email = '#eid > .form-control'
    input_phone = ':nth-child(4) > .col-md-4 > .form-control'
    genero_masculino = ':nth-child(5) > .col-md-4 > :nth-child(1)'
    hobbie_movies = '#checkbox2'
    linguagens = '#msdd'
    arabic_linguage = '.ui-autocomplete > :nth-child(1)'
    select_country_input = '.select2-selection'
    search_country = '.select2-search__field'
    result_search_option = '.select2-results__option'
    input_pass = '#firstpassword'
    input_confirm_pass = '#secondpassword'
    btn_submit = '#submitbtn'
}

export default CadastroObjects
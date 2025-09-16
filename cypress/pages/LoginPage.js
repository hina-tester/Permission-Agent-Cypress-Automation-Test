class LoginPage{


openBaseURL(){

    cy.visit(Cypress.env('BaseURL'))
}

     openURL(){

    cy.visit(Cypress.env('URL'))
}


}


export default LoginPage;
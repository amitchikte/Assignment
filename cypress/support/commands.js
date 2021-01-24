// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


//fixtures

Cypress.Commands.add("StudiBetalogin",()=>{
    cy.visit("http://afs-predev.testedgeonline.com/child/")
    cy.fixture("example").then((data)=>{

        cy.get(".form-control").type(data.id)
        cy.get(".btn-blue").click()
        cy.get("input[formcontrolname='password']").type(data.password)
        cy.get(".btn-blue").click()

    })
    
    

})

Cypress.Commands.add("StudiBetalogout",()=>{
    cy.visit("http://afs-predev.testedgeonline.com/child/menu")
    cy.get(".btn.btn-link.btn-link-primary.btn-with-icon",{timeout:30000}).click()
})
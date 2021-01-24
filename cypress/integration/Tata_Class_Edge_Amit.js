///<reference types = "cypress" />


describe("Test the Studi Beta software",()=>{

    beforeEach("Login of studiBeta",()=>{
        cy.StudiBetalogin()

    })

    afterEach("Logout of studiBeta",()=>{
        cy.StudiBetalogout()

    })
    it("Scenario 1-Verify home page,Count the nummber of books,Open the first book",()=>{

        cy.wait(20000)
        cy.get(".grade",{timeout:90000}).first().should("have.text","Class 6")
        cy.get("h5[class='heading4 primary']").eq(1).click()
        cy.get(".lib-subject-card",{timeout:70000}).then(($el)=>{
            cy.log($el.length)
            cy.wrap($el).eq(0).click()
            cy.get(".heading2").should("be.visible")
        })
    })

    it("Scenario 2-Validate if video is paused when clicked on note,Validate if Save Note button is disabled until any text is entered in note box,Validate message",()=>{
        cy.wait(20000)
        cy.get("h5[class='heading4 primary']",{timeout:90000}).eq(1).click()
        cy.get(".card-title",{timeout:20000}).contains(" Mathematics ").click()
        cy.get(".heading5",{timeout:20000}).contains(" Comparing Numbers ").click()
        cy.get(".heading5",{timeout:20000}).contains(" Begin Revise ").click()
        cy.get(".btn.btn-outline-primary",{timeout:20000}).click()
        cy.get(".icon.icon-add-note-white",{timeout:50000}).click()
        cy.get(".vjs-paused.vjs-user-inactive").should('be.visible')
        cy.get(".btn.btn-lg.btn-outline-primary").should("be.disabled")
        cy.get(".ql-editor.ql-blank").type("Note")
        cy.get(".btn.btn-lg.btn-outline-primary").should("be.enabled").click()
        cy.get(".tip-heading").should("be.visible")


    })
})
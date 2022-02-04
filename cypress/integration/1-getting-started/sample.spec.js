///<reference types="cypress"/>
describe("first group",()=>{
    it("my first test",()=>{
        expect(false).to.be.equals(false)
    })
    it("second test",()=>{
        cy.visit("http://demo.automationtesting.in/Register.html")

    })
    it("third test",()=>{
        
        cy.visit("https://example.cypress.io/todo")
       cy.contains("Pay electric bill").parent().find('input[type="checkbox"]').check()
      //  cy.get(".toggle").get('input[type="checkbox"]').check()
       cy.contains("Pay electric bill").parents('li').should('have.class',"completed")
    })
    it.only("forth test",()=>{
        cy.visit("https://example.cypress.io/todo")
        cy.get("[data-test=new-todo]").type('johny{enter}')
    })
})
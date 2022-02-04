///<reference types="cypress"/>
describe("dropdowns",()=>{
    it("selecting option from dropdown",()=>{
        cy.visit("http://localhost:4200/")
        cy.get('.header-container')
        .find('[status="primary"]').click()
        .get('.options-list').get('nb-option').eq(2).click()
    })
})

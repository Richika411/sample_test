///<reference types="cypress"/>
describe("testing table",()=>{
   beforeEach(()=>{
       cy.visit("http://localhost:4200/pages/tables/smart-table")     
   })
   it("accessing tables",()=>{
  
    // cy.get('tbody').contains('tr','John').find('.nb-edit',{force:true}).click().should('have.class','nb-checkmark')
    cy.get('tbody').contains('tr','John').then(tablerow  =>{
      cy.wrap(tablerow).find('.nb-edit',{force:true}).click()
      cy.wrap(tablerow).find('[placeholder="ID"]').type(50)
      cy.wrap(tablerow).find('.nb-close',{force:true}).click()
    //  cy.wrap(tablerow).find('.nb-checkmark').click()
  //    cy.wrap(tablerow).should('have.class','nb-checkmark')
    })
   })
})
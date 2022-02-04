///<reference types="cypress"/>
describe("Modals and Overlays",()=>{
    it("Tooltips",()=>{
        cy.visit("/modal-overlays/tooltip")
     //   cy.get('nb-card').get('nb-card-body').find('[nbtooltipicon="home-outline"]').click()

     cy.contains('nb-card','Tooltip With Icon').contains('Show Tooltip').click()
  //   cy.get('nb-tooltip').should('contain','This is a tooltip')
    })
    it.only("PopOver",()=>{
        cy.visit("/modal-overlays/popover")
        cy.contains('nb-card','Component Popovers').contains('With tabs').click()
    })
  
})
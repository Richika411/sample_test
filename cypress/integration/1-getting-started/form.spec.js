///<reference types="cypress"/>
describe("Type of Locators",()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:4200/")
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.get('.sidebar-toggle').click()
    })
    it("Locate Elements",()=>{
        
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        
        cy.get('.menu-sidebar').should('have.class','expanded')
        cy.get('[data-name="menu-2"]').click()
        cy.get("#inputEmail1").type('john')
        cy.contains('Sign in')
        cy.contains('[status="primary"]','Sign in').click()
      //  cy.contains('[status="warning"]','Sign in')
        

      cy.get('#inputEmail3')
      .parents('form')
      .find('button')
      .should('contain','Sign in')
      .parents('form')
      .find('.custom-checkbox').click()
      .should('have.class','checked')

     


      
    })

    it("menu-sidebar toggle",()=>{
          cy.contains('Forms').click()
          cy.contains('Form Layouts').click()
          cy.get('.sidebar-toggle').click()
    })
    //filling basic form and checking if email area contains the text
    it('sign in',()=>{
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.get('.sidebar-toggle').click()
        cy.contains('Basic form')
        .parent().then((form)=>{
         //   cy.wrap(form).contains('Email').click()
        cy.wrap(form).find('[placeholder="Email"]').should('have.id',"exampleInputEmail1").type("john@gmail.com").should('have.value',"john@gmail.com")
        cy.wrap(form).get('#exampleInputPassword1').type("john@gmail.com")
       cy.wrap(form).find('.custom-checkbox').click()
        })

        //to verify checkbox attribute
        cy.contains('nb-card','Basic form').find('nb-checkbox').find('.custom-checkbox').invoke('attr','class').should('contain','checked')
        
      // clicking on sign in button
       cy.contains('[status="danger"]','Submit').click()
    })
    it.only("Radio button",()=>{

      cy.get('nb-radio').find('[type="radio"]').first().check({force:true})
    })

})
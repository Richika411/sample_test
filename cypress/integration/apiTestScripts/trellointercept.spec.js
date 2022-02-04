///<reference types="cypress"/>

describe('Api Trello',()=>{
    it('Create a new Board',()=>{
         //cy.visit('/')
        //to get elements in network layer before the page is loaded 
        cy.intercept({
            method:'GET',
            url:'api/boards'
        }).as('boards')
        cy.visit('/')
        cy.wait('@boards')
        .its('response.statusCode')
        .should('eq',200)
        cy.get('[data-cy=board-item]').should('have.length',22)
    })
    it('Return Empty List',()=>{
        cy.intercept({
            method:'GET',
            url:'api/boards'
        },
        // {
        //     body:[]
        // }
        ).as('boards')
        cy.visit('/')
    })
    it("Pass value from fixture ",()=>{
        cy.intercept({
            method:'GET',
            url:'api/boards'
        },{
            fixture:'boards'
        }).as('boards')
        cy.visit('/')
    })
    it("Network Failure",()=>{
        cy.intercept({
            method:'GET',
            url:'api/boards'
        },{
             forceNetworkError:true
        }).as('boards')
        cy.visit('/')
    })
})
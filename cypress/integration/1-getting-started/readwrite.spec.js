///<reference types="cypress"/>
describe("writing files",()=>{
    it("writing text files",()=>{
        cy.writeFile("Sample.txt","hello",{flag:'a+'})
    })
    it("reading file",()=>{
        cy.readFile("sample.txt").should('contain','hello')
    })
    it("reading json file",()=>{
        cy.readFile('userdata.json').its('email').should('eq','john')

    })
    it("writing json file",()=>{
        cy.writeFile('empdata.json',{name:'smith',email:"smith@gmail.com"},{flag:'a+'})
    })
})
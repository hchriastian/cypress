context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://paper.id/webappv1/#/login')
    })
  
    // https://on.cypress.io/interacting-with-elements
  
    it('.type() - type into a DOM element', () => {
      // https://on.cypress.io/type
      cy.get('.auth-input-container')
        .type('kandidat@paper.id')

      cy.get('.auth-form__submit-btn')
        .click({ force: true })

      cy.get('.auth-mb-10')
        .type('Jakarta123')

      cy.get('.auth-form__submit-btn')
        .click({ force: true })
       


    })
})

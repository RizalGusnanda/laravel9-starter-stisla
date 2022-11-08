describe('empty spec', () => {
    it('passes', () => {
      cy.visit('http://127.0.0.1:8000/')

      cy.get('h4').should('have.text', 'Login')
      //masuk halaman login
      cy.get(':nth-child(2) > label').should('have.text', 'Email');
      cy.get('.control-label').should('have.text', 'Password');
      

      //mengisi form login
      cy.get(':nth-child(2) > .form-control').type('user@gmail.com')
      cy.get(':nth-child(3) > .form-control').type('')

      //klik button login
      cy.get('.btn').click()
      
      //klik button 
      cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click()
      cy.get(':nth-child(2) > .has-dropdown > span').click()
      cy.get('.active > .dropdown-menu > li > .nav-link').click()
      
    })
  })
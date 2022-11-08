describe('empty spec', () => {
    it('passes', () => {
      cy.visit('http://127.0.0.1:8000/')

      cy.get('h4').should('have.text', 'Login')
      //masuk halaman login
      cy.get(':nth-child(2) > label').should('have.text', 'Email');
      cy.get('.control-label').should('have.text', 'Password');
      

      //mengisi form login
      cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com')
      cy.get(':nth-child(3) > .form-control').type('password')

      //klik button login
      cy.get('.btn').click()

      //klik button user list
      cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click()
      cy.get(':nth-child(2) > .has-dropdown > span').click()
      cy.get('.active > .dropdown-menu > li > .nav-link').click()

      //create user list
      cy.get('.card-header-action > .btn-icon').click()
      cy.get('h1').should('have.text', 'Table')
      cy.get('h4').should('have.text', 'Validasi Tambah Data')
      cy.get(':nth-child(2) > label').should('have.text', 'Your Name')
      cy.get('#name').type('nickname')
      cy.get(':nth-child(3) > label').should('have.text', 'Email')
      cy.get('#email').type('nickname@gmail.com')
      cy.get(':nth-child(4) > label').should('have.text', 'Password')
      cy.get('#password').type('password')
      cy.get('.btn-primary').click()

      //search user list
      cy.get('.search').click()
      cy.get('.form-group > label').should('have.text', 'User');
      cy.get('#name').type('nickname')
      cy.get('#search > .text-right > .btn-primary').click()
      
      
      //masuk halaman edit
      cy.get('.btn-info > .fas').click()
      cy.get('.section-title').should('have.text', 'Edit User')
      cy.get('h4').should('have.text', 'Validasi Edit Data User')
      cy.get(':nth-child(3) > label').should('have.text', 'Your Name')
      cy.get(':nth-child(4) > label').should('have.text', 'Email')

      //update data
      cy.get('#name').clear()
      cy.get('#name').type('anda')
      cy.get('#email').clear()
      cy.get('#email').type('anda@gmail.com')
      cy.get('.btn-primary').click()

      //delete user list
      cy.get(':nth-child(4) > .text-right > .d-flex > .ml-2 > .btn').click()

    })
  })
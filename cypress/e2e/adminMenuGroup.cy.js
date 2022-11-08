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

      //klik button Menu Group and Menu Item
      cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
      cy.get(':nth-child(4) > .has-dropdown > span').click()
      cy.get('.active > .dropdown-menu > :nth-child(1) > .nav-link').click()
      cy.get('.card-header-action > .btn-icon').click()

      //Create Menu Group and Menu Item
      cy.get('h1').should('have.text', 'Menu Group and Menu Item');
      cy.get('.section-title').should('have.text', 'Menu Group Management');
      cy.get('h4').should('have.text', 'Create Menu Group');
      cy.get(':nth-child(2) > label').should('have.text', 'Name');
      cy.get(':nth-child(3) > label').should('have.text', 'Icon Name');
      cy.get(':nth-child(4) > label').should('have.text', 'Permission Name');

      //Isi
      cy.get('#name').type('Box Testing')
      cy.get('#icon').type('Box Testing')
      cy.get('.select2-selection__arrow').click()
      
      cy.get('.select2-search__field').type('dashboard{enter}')
      cy.get('.btn-primary').click()
      //Search Group
      cy.get('.card-header-action > .btn-info').click()
      cy.get('label').should('have.text', 'Group');
      cy.get('#name').type('Box Testing')
      cy.get('.text-right > .btn-primary').click()
      //Edit
      cy.get('.d-flex > .btn-info').click()
      cy.get('h1').should('have.text', 'Menu Group and Menu Item');
      cy.get('.section-title').should('have.text', 'Menu Group Management');
      cy.get('h4').should('have.text', 'Edit Menu Group');
      cy.get('label').should('have.text', 'Name');
      cy.get('#name').clear()
      cy.get('#name').type('user.management')
      cy.get('.btn-primary').click()
      //Delete
      cy.get(':nth-child(6) > .text-right > .d-flex > .ml-2 > .btn > .fas').click()

    })
  })
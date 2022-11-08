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
      cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
      cy.get(':nth-child(4) > .has-dropdown > span').click()
      cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').click()
      
      cy.get('h1').should('have.text', 'Menu Group and Menu Item');
      cy.get('.section-title').should('have.text', 'Menu Item Management');
      cy.get('h4').should('have.text', 'Menu Item List');

      //Create Menu Group and Menu Item
      cy.get('.card-header-action > .btn-icon').click()
      cy.get('h4').should('have.text', 'Menu Item Create Form');
      cy.get(':nth-child(2) > label').should('have.text', 'Parent');
      cy.get(':nth-child(2) > .select2-container > .selection > .select2-selection > .select2-selection__arrow').click()
      cy.get('.select2-search__field').type('dashboard{enter}')
      cy.get(':nth-child(3) > label').should('have.text', 'Menu Item Name');
      cy.get('#name').type('LoadTest')
      cy.get(':nth-child(4) > label').should('have.text', 'Permission Name');
      cy.get('#permission_name').type('LoadTest')
      cy.get(':nth-child(5) > label').should('have.text', 'Url');
      cy.get(':nth-child(5) > .select2-container > .selection > .select2-selection > .select2-selection__arrow').click()
      cy.get('.select2-search__field').type('_debugbar/open{enter}')
      cy.get('.btn-primary').click()

      //Search
      cy.get('.card-header-action > .btn-info').click()
      cy.get('label').should('have.text', 'Menu Item');
      cy.get('#name').type('LoadTest')
      cy.get('.text-right > .btn-primary').click()

      //Hapus
      cy.get('.ml-2 > .btn > .fas').click()

    })
  })
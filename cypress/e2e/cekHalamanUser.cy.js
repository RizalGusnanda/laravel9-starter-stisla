describe('empty spec', () => {
    it('passes', () => {
    cy.visit('http://127.0.0.1:8000/')

    cy.get('h4').should('have.text', 'Login')
    //masuk halaman login
    cy.get(':nth-child(2) > label').should('have.text', 'Email');
    cy.get('.control-label').should('have.text', 'Password');
    

    //mengisi form login
    cy.get(':nth-child(2) > .form-control').type('user@gmail.com')
    cy.get(':nth-child(3) > .form-control').type('password')

    //klik button login
    cy.get('.btn').click()

    //Masuk halaman User List
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click()
    cy.get(':nth-child(2) > .has-dropdown > span').click()
    cy.get('.active > .dropdown-menu > li > .nav-link').click()
    
    //Halaman User List
    cy.get('h1').should('have.text', 'User List');
    cy.get('.section-title').should('have.text', 'User Management');
    cy.get('h4').should('have.text', 'User List');
    cy.get('.card-header-action > .btn-icon').should('have.text', 'Create New\n                                    User');
    cy.get('.import').should('have.text', '\n                                    \n                                    Import User');
    cy.get('[href="http://127.0.0.1:8000/user-management/export"]').should('have.text', '\n                                    \n                                    Export User');
    cy.get('.search').should('have.text', '\n                                    \n                                    Search User');
    cy.get(':nth-child(2) > .text-right > .d-flex > .btn-info').should('have.text', '\n                                                            Edit');
    cy.get(':nth-child(2) > .text-right > .d-flex > .ml-2 > .btn').should('have.text', ' Delete ');
    //Logout
    cy.get('.nav-link > .d-sm-none').click()
    cy.get('.text-danger').click()

    })
})
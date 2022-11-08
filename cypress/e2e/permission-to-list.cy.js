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

    // sidebar
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();

    // permission role
    cy.get(':nth-child(3) > .has-dropdown > span').click()
    cy.get('.active > .dropdown-menu > :nth-child(1) > .nav-link').click()
    cy.get('h1').should('have.text', 'Role and Permission');
    cy.get('.section-title').should('have.text', 'Role Management');

    //Create
    cy.get('.card-header-action > .btn-icon').click()
    cy.get('h4').should('have.text', 'Form Create Role')
    cy.get(':nth-child(2) > label').should('have.text', 'Role Name')
    cy.get(':nth-child(3) > label').should('have.text', 'Guard Name')
    cy.get('#name').type('Box Testing')
    cy.get('#guard_name').clear()
    cy.get('#guard_name').type('web')
    cy.get('.btn-primary').click()

    //Edit
    cy.get(':nth-child(4) > .text-right > .d-flex > .btn-info').click()
    cy.get('#name').clear()
    cy.get('#name').type('Edit permmission role')
    cy.get('.btn-primary').click()




    

    // cy.get(':nth-child(3) > .has-dropdown').click();
    // cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').click();

    // // create
    // cy.get('.card-header-action > .btn-icon').contains('Create New Permission').click();
    // cy.get('#name').click().type('user');
    // cy.get('.btn-primary').contains('Submit').click();
    // cy.get('.alert').contains('Permission Created Successfully');

    // // edit
    // cy.get(':nth-child(5) > .page-link').click();
    // cy.get(':nth-child(9) > .text-right > .d-flex > .btn-info').contains('Edit').click();
    // cy.get('#name').click().clear().type('test');
    // cy.get('.btn-primary').contains('Submit').click();
    // cy.get('.alert').contains('Permission Updated Successfully');

    // // delete
    // cy.get(':nth-child(5) > .page-link').click();
    // cy.get(':nth-child(9) > .text-right > .d-flex > .ml-2 > .btn').contains('Delete').click();
    // cy.get('.alert').contains('Permission Deleted Successfully');

    })
})
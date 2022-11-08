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

        // user to role 
        cy.get(':nth-child(3) > .has-dropdown').click();
        cy.get('.dropdown-menu > :nth-child(4) > .nav-link').click();

        // create
        cy.get('.card-header-action > .btn').click();
        cy.get('.select2-selection__arrow').click();
        cy.get('.select2-dropdown > .select2-search > .select2-search__field').type('SuperAdmin{enter}');
        cy.get(':nth-child(3) > .select2-container > .selection > .select2-selection > .select2-selection__rendered').click();
        cy.get(':nth-child(3) > .select2-container > .selection > .select2-selection > .select2-selection__rendered').type('user{enter}');
        cy.get('.btn-primary').click();
        cy.get('.alert').contains('User Assigned To Role Successfully');

        // edit
        cy.get(':nth-child(2) > .text-right > .d-flex > .btn').click();
        cy.get('.select2-selection__arrow').click();
        cy.get('.select2-dropdown > .select2-search > .select2-search__field').type('SuperAdmin{enter}');
        cy.get('.btn-primary').click();
        cy.get('.alert').contains('User Assigned To Role Successfully');

        })
    })
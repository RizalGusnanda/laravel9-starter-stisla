/// <reference types="cypress"/>

describe('Login Page', () =>{
  it('Check Specification Login Page', () => {
      cy.visit('http://127.0.0.1:8000/')
      cy.get('h4').should('have.text', 'Login')
      cy.get(':nth-child(2) > label').should('have.text', 'Email')
      cy.get('.control-label').should('have.text', 'Password')
      cy.get('.btn').contains('Login').and('be.enabled')
    });
  
    it('Login Success', ()=> {
      cy.visit('http://127.0.0.1:8000/')
      cy.get('h4').should('have.text', 'Login')
      cy.get(':nth-child(2) > label').should('have.text', 'Email')
      cy.get('.control-label').should('have.text', 'Password')
      cy.get('.btn').contains('Login').and('be.enabled')
      cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com')
      cy.get(':nth-child(2) > .form-control').should('have.value','superadmin@gmail.com')
      cy.get(':nth-child(3) > .form-control').type('password')
      cy.get(':nth-child(3) > .form-control').should('have.value','password')
      cy.get('.btn').click();
    });
  
    it('Failed if password wrong', ()=> {
      cy.visit('http://127.0.0.1:8000/')
      cy.get('h4').should('have.text', 'Login')
      cy.get(':nth-child(2) > label').should('have.text', 'Email')
      cy.get('.control-label').should('have.text', 'Password')
      cy.get('.btn').contains('Login').and('be.enabled')
      cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com')
      cy.get(':nth-child(3) > .form-control').type('pass')
      cy.get('.btn').click();
      cy.get('.invalid-feedback').contains('These credentials do not match our records.')
    });
  
    it('Failed if Email wrong', ()=> {
      cy.visit('http://127.0.0.1:8000/')
      cy.get('h4').should('have.text', 'Login')
      cy.get(':nth-child(2) > label').should('have.text', 'Email')
      cy.get('.control-label').should('have.text', 'Password')
      cy.get('.btn').contains('Login').and('be.enabled')
      cy.get(':nth-child(2) > .form-control').type('admin@gmail.com')
      cy.get(':nth-child(3) > .form-control').type('password')
      cy.get('.btn').click();
      cy.get('.invalid-feedback').contains('These credentials do not match our records.')
    });
  
    it('Login with empty answer', ()=> {
      cy.visit('http://127.0.0.1:8000/')
      cy.get('h4').should('have.text', 'Login')
      cy.get(':nth-child(2) > label').should('have.text', 'Email')
      cy.get('.control-label').should('have.text', 'Password')
      cy.get('.btn').contains('Login').and('be.enabled')
      cy.get('.btn').click();
      cy.get(':nth-child(2) > .invalid-feedback').contains('The email field is required')
      cy.get(':nth-child(3) > .invalid-feedback').contains('The password field is required')
    });
    })
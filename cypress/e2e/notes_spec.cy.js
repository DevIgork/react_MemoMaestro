// cypress/integration/notes_spec.js

describe('Memo Maestro Application', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  afterEach(() => {
    cy.get('.delete-icon').each(($el) => {
      cy.wrap($el).click();
    });
  });

  it('Adds a new note', () => {
    cy.get('.note textarea').type('This is a test note');
    cy.get('.note button.save').click();
    cy.contains('.notes-list', 'This is a test note').should('be.visible');
  });

  it('Searches for a note', () => {
    cy.get('.note textarea').type('This is a test note');
    cy.get('.note button.save').click();
    cy.get('.search input').type('test');
    cy.contains('.notes-list', 'This is a test note').should('be.visible');
  });
});

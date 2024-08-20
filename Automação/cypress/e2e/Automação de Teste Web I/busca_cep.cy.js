/// <reference types="cypress" />

beforeEach(() => {
  cy.visit(
    'https://www2.correios.com.br/sistemas/buscacep/buscaCepEndereco.cfm'
  );
});
describe('CEP Correios', () => {
  it('CT01 - Preenche corretamente os campos de endereço ao pesquisar um CEP válido', () => {
    cy.get('.contentform > :nth-child(3) > label > input').type('69005040');
    cy.get('select').select('Localidade/Logradouro');
    cy.get('.btn2').click();

    cy.contains('Rua Miranda Leão');
    cy.contains('Centro');
    cy.contains('Manaus/AM');
    cy.contains('69005-040');
  });

  it('CT02 - Realizar busca com o valor Lojas Bemol', () => {
    cy.get('.contentform > :nth-child(3) > label > input').type('Lojas Bemol');
    cy.get('select').select('Todos');
    cy.get('.btn2').click();

    cy.contains('Rua Miranda Leão, 41 Lojas Bemol');
    cy.contains('Centro');
    cy.contains('Manaus/AM ');
    cy.contains('69005-901');
  });
});

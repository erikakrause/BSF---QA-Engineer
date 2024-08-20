/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('https://www.trivago.com.br');
});

describe('Acessar página do Trivago', () => {
  it('CT01 - Visita a página inicial do Trivago', () => {
    // Comando para visitar a página do Trivago
    cy.visit('https://www.trivago.com.br/');

    // Verifica se a página foi carregada corretamente
    cy.title().should('include', 'trivago');
  });

  it('CT02 - Pesquisar por Manaus', () => {
    cy.get('[data-testid="search-form-destination"]').type('Manaus'); //Digita valor Manaus
    cy.get(':nth-child(1) > [data-testid="ssg-element"] > .h-14').click(); // Seleciona campo cidade Manuas
    cy.get(
      '[data-testid="search-form-calendar-checkin"] > .items-center'
    ).click();

    cy.get('[data-testid="tomorrowNight-index-label"]', {
      timeout: 10000,
    }).click();
    cy.get('[data-testid="search-form-calendar-checkout-label"]')
      .should('be.visible')
      .click();
    cy.get('[data-testid="thisWeekend-index-label"]').click();
    cy.get('.AnimatedContent_content__Ox3mR > span').click();
  });

  it.only('CT03 - Validar ordenação por lista de Avaliações e Sugestões', () => {
    cy.visit(
      'https://www.trivago.com.br/pt-BR/srl/hot%C3%A9is-manaus-brasil?search=200-56507;dr-20240823-20240825-s'
    );
    cy.get('[data-testid="calendar-button-close"] > .Icon_wrapper__B6IoS').click()
    cy.wait(5000)
    cy.get('[data-testid="sorting-selector-select"]').select('Avaliação e sugestões')
    
  });
});

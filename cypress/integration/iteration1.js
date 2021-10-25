it('should render movie cards in MoviesContainer from API data', () => {
  cy.visit('http://localhost:3000/')
  cy.get(".featured__card-holder").should('be.visible')
  cy.get(".movie-card__movie-poster").should('be.visible')
  });

it('Should be able to access single movie\'s details', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[id="694919"]').click()
  })

  it('should render movie cards in MoviesContainer from API data', () => {
    cy.visit('http://localhost:3000/')
    cy.get(".single-movie-info__movie-poster").should('be.visible')
    cy.get(".single-movie-view__genres").should('be.visible')
    cy.get(".single-movie-view__release-date").should('be.visible')
    cy.get(".single-movie-view__rating").should('be.visible')
    cy.get(".single-movie-view__tagline").should('be.visible')
    cy.get(".single-movie-view__overview").should('be.visible')
    cy.get(".single-movie-view__budget").should('be.visible')
    });

  it('Should be able to return home from single movie view', () => {
      cy.visit('http://localhost:3000/')
      cy.get('single-movie-info__home-view-button').click()
    })

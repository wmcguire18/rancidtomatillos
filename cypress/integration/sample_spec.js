describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

describe('Visit Test', () => {
  it('Mile High Movies', () => {
    cy.visit('http://localhost:3000/')
  })
})

//Pseudocode

//Clicking on a poster produces single movie view
//Sadpath -- produces an error;
//Clicking on return to home button returns to all movie view
//Sadpath -- produces an error;
//Single movie view contains, review score, title, budget, synopsis etc.
//Logo and name visible in both views
//Sadpath is broken image
//Loading screen visible
//Sadpath error catch
//cy intercept test to confirm request
//

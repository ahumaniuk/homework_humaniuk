/// <reference types="cypress" />

context.skip('Location', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/location')
  })

  it('cy.hash() - get the current URL hash', () => {
    // https://on.cypress.io/hash
    cy.hash().should('be.empty')
  })

  it('cy.location() - get window.location', () => {
    // https://on.cypress.io/location
    cy.location().should((location) => {
      expect(location.hash).to.be.empty
      expect(location.href).to.eq('https://example.cypress.io/commands/location')
      expect(location.host).to.eq('example.cypress.io')
      expect(location.hostname).to.eq('example.cypress.io')
      expect(location.origin).to.eq('https://example.cypress.io')
      expect(location.pathname).to.eq('/commands/location')
      expect(location.port).to.eq('')
      expect(location.protocol).to.eq('https:')
      expect(location.search).to.be.empty
    })
  })

  it('cy.url() - get the current URL', () => {
    // https://on.cypress.io/url
    cy.url().should('eq', 'https://example.cypress.io/commands/location')
  })
})

context ('check the website', () => {

  beforeEach(() => {
    cy.visit('https://wordcounter.net/our-tools')
  })

  it ('open words counter website and check its functionality', () => {
    cy.visit('https://wordcounter.net/character-count')
    cy.get('#wc_navbar > li:nth-child(2) > a').click()
    cy.url().should('contain', '/blog')
    cy.get('#post-3603 > .hentry__header > .hentry__title > a').should('contain.text', 'The Top 10')
    //click on search field and fill it with data and click
    cy.get('#search-3 > form > label > input').type('word')
    cy.get('#search-3 > form > input').click()
    //verify correct page with correct data is displayed
    cy.url().should('contain', 'blog/?s=word')
    cy.get('body > section > main > header > h1').should('contain.text', 'Search Results for: word')
    //returning to home page
    cy.get('#menu-item-36 > a').click()
    //
    cy.get('#box').type('some text for test')
    cy.get('#editor_container > div:nth-child(7) > div > div:nth-child(1) > h4 > span').should('contain.text', '4 words 18 characters')
    //verify text is capitalised
    cy.get('#case-btn').click()
    cy.get('#upper-case-link').click()
    //following step does not work work in progress
    //cy.get('#box').should('contain.text','SOME TEXT FOR TEST')
    cy.get('#clear-btn').click()
    cy.get('#editor_container > div:nth-child(7) > div > div:nth-child(1) > h4 > span').should('contain.text', '0 words 0 characters')




  })
  

})




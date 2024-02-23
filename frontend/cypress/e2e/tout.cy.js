describe('My First Test', () => {
  it('Visits the app root url', () => {
    var username = "UserName"
    var mdp = "mdp"

    // Test d'accès au site web
    cy.visit('http://localhost/#/') 
    cy.contains('Bienvenue sur notre site') 

    // Test inscription avec des identifiants prédéfinies
    cy.get('.navbar-links > [href="#/register"]').click()
    cy.get(':nth-child(1) > input').type(username)
    cy.get('form > :nth-child(2) > input').type(mdp)
    cy.get(':nth-child(3) > input').type(mdp)
    cy.get('#send').click()

    // Test de connexion avec les identifiants tu test inscriptions
    cy.get('.navbar-links > [href="#/login"]').click()
    cy.get(':nth-child(1) > input').type(username)
    cy.get('form > :nth-child(2) > input').type(mdp)
    cy.get('#send').click()

    // Test d'accès à la page historique
    cy.get('[href="#/historique"]').click()

    // Test de faire une recherche à l'API
    cy.get('#research').click()
    cy.get('.author-filter > input').type("zfezfzffze")
    cy.get('.author-filter > .add-button').click()
    cy.get('.search-button', { timeout: 100000000 }).click().then(() => {
      cy.get('#myModal > button', { timeout: 100000000 })
        .should('be.visible')
        .click()
    })
    
    // Test de téléchargement de l'application 
    cy.get('.navbar-accueil > .navbar-link').click()
    cy.get('#button_dl').click()
  })
})


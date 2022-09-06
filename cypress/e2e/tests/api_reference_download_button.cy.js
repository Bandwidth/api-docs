// I left Numbers out becuase even after increase the  request page timeout to 2 minutes it still failed. Numbers might need it's own special treatment later on since the spec itself is so large.

describe('Verify download button exists in the Voice API Reference Page', () => {
    it('checks the download button to verify it exists',() => {
      cy.visit('/apis/voice')
      cy.get('p')
        .contains("Download OpenAPI specification")
        .children('a')
        .contains("Download")      
      })
  }) 

  describe('Verify download button exists in the Messaging API Reference Page', () => {
    it('checks the download button to verify it exists',() => {
      cy.visit('/apis/messaging')
      cy.get('p')
        .contains("Download OpenAPI specification")
        .children('a')
        .contains("Download")      
      })
  }) 

  describe('Verify download button exists in the Dash API Reference Page', () => {
    it('checks the download button to verify it exists',() => {
      cy.visit('/apis/dash')
      cy.get('p')
        .contains("Download OpenAPI specification")
        .children('a')
        .contains("Download")      
      })
  }) 

  describe('Verify download button exists in the WebRTC API Reference Page', () => {
    it('checks the download button to verify it exists',() => {
      cy.visit('/apis/webrtc')
      cy.get('p')
        .contains("Download OpenAPI specification")
        .children('a')
        .contains("Download")      
      })
  }) 

  describe('Verify download button exists in the Phone Number Lookup API Reference Page', () => {
    it('checks the download button to verify it exists',() => {
      cy.visit('/apis/number-lookup')
      cy.get('p')
        .contains("Download OpenAPI specification")
        .children('a')
        .contains("Download")      
      })
  }) 

  describe('Verify download button exists in the Multi-Factor Authentication API Reference Page', () => {
    it('checks the download button to verify it exists',() => {
      cy.visit('/apis/multifactorauth')
      cy.get('p')
        .contains("Download OpenAPI specification")
        .children('a')
        .contains("Download")      
      })
  }) 

  describe('Verify download button exists in the International A2P Messaging API Reference Page', () => {
    it('checks the download button to verify it exists',() => {
      cy.visit('/apis/messaging-international')
      cy.get('p')
        .contains("Download OpenAPI specification")
        .children('a')
        .contains("Download")      
      })
  }) 

  describe('Verify download button exists in the Dash Notifications API Reference Page', () => {
    it('checks the download button to verify it exists',() => {
      cy.visit('/apis/dash-notifications')
      cy.get('p')
        .contains("Download OpenAPI specification")
        .children('a')
        .contains("Download")      
      })
  }) 

  describe('Verify download button exists in the Insights API Reference Page', () => {
    it('checks the download button to verify it exists',() => {
      cy.visit('/apis/insights')
      cy.get('p')
        .contains("Download OpenAPI specification")
        .children('a')
        .contains("Download")      
      })
  }) 
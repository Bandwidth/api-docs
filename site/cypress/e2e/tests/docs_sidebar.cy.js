
import {testSidebar} from '../../utils/utils'

context('Testing the Docs Sidebar Tabs', () => {
  beforeEach(() => {
    cy.visit('/docs')
  })

  it('Should verify that the Account Management tab and sub-tabs opens and closes properly', () => {
    testSidebar('Account Management')
    testSidebar('Setup')
  })

  it('Should verify that the Numbers tab and sub-tabs opens and closes properly', () => {
    testSidebar('Numbers')
    testSidebar('Webhooks')
    testSidebar('Guides and Tutorials')
  })

  it('Should verify that the Voice tab and sub-tabs opens and closes properly', () => {
    testSidebar('Voice')
    testSidebar('Webhooks')
    testSidebar('BXML')
    testSidebar('Guides and Tutorials')
  })

  it('Should verify that the Messaging tab and sub-tabs opens and closes properly', () => {
    testSidebar('Messaging')
    testSidebar('Guides and Tutorials')
    testSidebar('Campaign Management')
    testSidebar('10DLC CSP Campaigns')
    testSidebar('10DLC Campaign Imports')
  })

  it('Should verify that the WebRTC tab and sub-tabs opens and closes properly', () => {
    testSidebar('WebRTC')
    testSidebar('Guides and Tutorials')
  })

  it('Should verify that the Multi-Factor Authentication tab and sub-tabs opens and closes properly', () => {
    testSidebar('Multi-Factor Authentication')
    testSidebar('Webhooks')
  })
  
  it('Should verify that the Emergency Services tab and sub-tabs opens and closes properly', () => {
    testSidebar('Emergency Services')
    testSidebar('Bandwidth Dashboard')
    testSidebar('911 Access Dashboard')
  })
})

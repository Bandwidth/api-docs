
import {testSidebar} from '../../utils/utils'

context('Testing the Migration Guides Sidebar Tabs', () => {
  beforeEach(() => {
    cy.visit('/migration-guides/')
  })

  it('Should verify that the Python tab and subtabs opens and closes properly', () => {
    testSidebar('Python')
  })
})

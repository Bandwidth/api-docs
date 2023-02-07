/* Cypress Tests for the Algolia and Redoc Search Bars */

import { algoliaSearchTester, redocSearchTester } from "../../utils/utils";

context('Algolia Search', () => {
    algoliaSearchTester('Messaging')
    algoliaSearchTester('Voice')
    algoliaSearchTester('Account')
})

context('Redoc Search', () => {
    redocSearchTester('/apis/messaging/', 'List')
    redocSearchTester('/apis/numbers/', 'CampaignManagement')
    redocSearchTester('/apis/voice/', '/calls')
})

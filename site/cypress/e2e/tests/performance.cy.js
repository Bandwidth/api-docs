import {performanceTester} from '../../utils/utils'

context('Home Page Performance Test', () => {
  performanceTester('/', 'Bandwidth Developer Documentation')
})

context('Home Page Performance Test', () => {
  performanceTester('/docs/', 'Bandwidth API Documentation')
})

context('Home Page Performance Test', () => {
  performanceTester('/apis/', 'API Reference')
})

context('Home Page Performance Test', () => {
  performanceTester('/apis/numbers/', 'Response samples', 'h3')
})
context('Home Page Performance Test', () => {
  performanceTester('/apis/global/', 'Access', 'h2')
})

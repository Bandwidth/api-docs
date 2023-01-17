import {performanceTester} from '../../utils/utils'

context('Home Page Performance Test', () => {
  performanceTester('/', 'Bandwidth Developer Documentation')
})

context('Docs Page Performance Test', () => {
  performanceTester('/docs/', 'Bandwidth API Documentation')
})

context('API Reference Page Performance Test', () => {
  performanceTester('/apis/', 'API Reference')
})

// context('Numbers API Performance Test', () => {
//   performanceTester('/apis/numbers/', 'Response samples', 'h3', 10000)
// })

// context('Global API Performance Test', () => {
//   performanceTester('/apis/global/', 'Access', 'h2', 10000)
// })

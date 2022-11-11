import {splashRowTester, testTextLink, testCarousel} from '../../utils/utils'

context('Guides Splash Row Content', () => {
  splashRowTester('/', 'Check out our guides', '[data-cy="splash"] > :nth-child(2)', 'Read the guides →')
})

context('Read the guides link', () => {
  testTextLink('/','Read the guides', 'docs' ,'[data-cy="link"]')
})

context('APIS Splash Row Content', () => {
  splashRowTester('/', 'Dig into our API reference', '[data-cy="splash"] > :nth-child(3)', 'See our API reference →')
})

context('See our API reference link', () => {
  testTextLink('/','See our API reference', 'apis' ,'[data-cy="link"]')
})

context('SDKS Splash Row Content', () => {
  splashRowTester('/', 'Looking for our SDKs?', '[data-cy="splash"] > :nth-child(5)', 'Build with Bandwidth →')
})

context('Build with Bandwidth link', () => {
  testTextLink('/','Build with Bandwidth', 'sdks' ,'[data-cy="link"]')
})

context('Carousel Tests', () => {
  testCarousel('/', 10, 'Recent Blog Posts')
})

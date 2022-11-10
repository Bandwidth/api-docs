import {splashRowTester, testTextLink, testCarousel} from '../../utils/utils'

context('Guides Splash Row Content', () => {
  splashRowTester('/', 'Check out our guides', '.splash_src-components-css-SplashPage-module > :nth-child(2)', 'Read the guides →')
})

context('Read the guides link', () => {
  testTextLink('/','Read the guides', 'docs' ,'.link_src-components-css-SplashPage-module')
})

context('APIS Splash Row Content', () => {
  splashRowTester('/', 'Dig into our API reference', '.splash_src-components-css-SplashPage-module > :nth-child(3)', 'See our API reference →')
})

context('See our API reference link', () => {
  testTextLink('/','See our API reference', 'apis' ,'.link_src-components-css-SplashPage-module')
})

context('SDKS Splash Row Content', () => {
  splashRowTester('/', 'Looking for our SDKs?', '.splash_src-components-css-SplashPage-module > :nth-child(5)', 'Build with Bandwidth →')
})

context('Build with Bandwidth link', () => {
  testTextLink('/','Build with Bandwidth', 'sdks' ,'.link_src-components-css-SplashPage-module')
})

context('Carousel Tests', () => {
  testCarousel('/', 10, 'Recent Blog Posts')
})

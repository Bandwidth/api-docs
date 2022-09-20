import {navTester, testSvgLink, testTextLink} from '../../utils/utils'

context('Numbers Docs SVG Link on Homepage', () => {
  testSvgLink('/','svg[alt="Numbers"]')
  navTester('docs/numbers')
})

context('Numbers Docs Text Link on Homepage', () => {
  testTextLink('/','Numbers')
  navTester('docs/numbers')
})

context('Voice Docs SVG Link on Homepage', () => {
  testSvgLink('/','svg[alt="Voice"]')
  navTester('docs/voice')
})

context('Voice Docs Text Link on Homepage', () => {
  testTextLink('/','Voice')
  navTester('docs/voice')
})

context('Messaging Docs SVG Link on Homepage', () => {
  testSvgLink('/','svg[alt="Messaging"]')
  navTester('docs/messaging')
})

context('Messaging Docs Text Link on Homepage', () => {
  testTextLink('/','Messaging')
  navTester('docs/messaging')
})

context('Emergency Docs SVG Link on Homepage', () => {
  testSvgLink('/','svg[alt="Emergency"]')
  navTester('docs/emergency')
})

context('Emergency Docs Text Link on Homepage', () => {
  testTextLink('/','Emergency')
  navTester('docs/emergency')
})

context('Multi-Factor Authentication Docs SVG Link on Homepage', () => {
  testSvgLink('/','svg[alt="Multi-Factor Authentication"]')
  navTester('docs/mfa')
})

context('Multi-Factor Authentication Docs Text Link on Homepage', () => {
  testTextLink('/','Multi-Factor Authentication')
  navTester('docs/mfa')
})

context('WebRTC Docs SVG Link on Homepage', () => {
  testSvgLink('/','svg[alt="WebRTC"]')
  navTester('docs/webrtc')
})

context('WebRTC Docs Text Link on Homepage', () => {
  testTextLink('/','WebRTC')
  navTester('docs/webrtc')
})

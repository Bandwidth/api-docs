import {testSvgLink, testTextLink} from '../../utils/utils'

context('Numbers Docs SVG Link on Homepage', () => {
  testSvgLink('/','svg[alt="Numbers"]', 'docs/numbers')
})

context('Numbers Docs Text Link on Homepage', () => {
  testTextLink('/','Numbers', 'docs/numbers')
})

context('Voice Docs SVG Link on Homepage', () => {
  testSvgLink('/','svg[alt="Voice"]', 'docs/voice')
})

context('Voice Docs Text Link on Homepage', () => {
  testTextLink('/','Voice', 'docs/voice')
})

context('Messaging Docs SVG Link on Homepage', () => {
  testSvgLink('/','svg[alt="Messaging"]', 'docs/messaging')
})

context('Messaging Docs Text Link on Homepage', () => {
  testTextLink('/','Messaging', 'docs/messaging')
})

context('Emergency Docs SVG Link on Homepage', () => {
  testSvgLink('/','svg[alt="Emergency"]', 'docs/emergency')
})

context('Emergency Docs Text Link on Homepage', () => {
  testTextLink('/','Emergency', 'docs/emergency')
})

context('Multi-Factor Authentication Docs SVG Link on Homepage', () => {
  testSvgLink('/','svg[alt="Multi-Factor Authentication"]', 'docs/mfa')
})

context('Multi-Factor Authentication Docs Text Link on Homepage', () => {
  testTextLink('/','Multi-Factor Authentication', 'docs/mfa')
})

context('WebRTC Docs SVG Link on Homepage', () => {
  testSvgLink('/','svg[alt="WebRTC"]', 'docs/webrtc')
})

context('WebRTC Docs Text Link on Homepage', () => {
  testTextLink('/','WebRTC', 'docs/webrtc')
})

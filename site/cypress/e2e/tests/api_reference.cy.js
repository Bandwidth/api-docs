import {testSvgLink, testTextLink} from '../../utils/utils'

context('Voice API SVG Link on API Reference Page', () => {
  testSvgLink('/apis/','svg[alt="Voice API"]', 'apis/voice')
})

context('Voice API Text Link on API Reference Page', () => {
  testTextLink('/apis/','Voice API', 'apis/voice')
})

context('Numbers API SVG Link on API Reference Page', () => {
  testSvgLink('/apis/','svg[alt="Numbers API"]', 'apis/numbers')
})

context('Number API Text Link on API Reference Page', () => {
  testTextLink('/apis/','Numbers API', 'apis/numbers')
})

context('Messaging API SVG Link on API Reference Page', () => {
  testSvgLink('/apis/','svg[alt="Messaging API"]', 'apis/messaging')
})

context('Messaging API Text Link on API Reference Page', () => {
  testTextLink('/apis/','Messaging API', 'apis/messaging')
})

context('Emergency API SVG Link on API Reference Page', () => {
  testSvgLink('/apis/','svg[alt="Emergency API"]', 'apis/dash')
})

context('Emergency API Text Link on API Reference Page', () => {
  testTextLink('/apis/','Emergency API', 'apis/dash')
})

context('WebRTC API SVG Link on API Reference Page', () => {
  testSvgLink('/apis/','svg[alt="WebRTC API"]', 'apis/webrtc')
})

context('WebRTC Product Text Link on API Reference Page', () => {
  testTextLink('/apis/','WebRTC API', 'apis/webrtc')
})

context('Phone Number Lookup API SVG Link on API Reference Page', () => {
  testSvgLink('/apis/','svg[alt="Phone Number Lookup API"]', 'apis/number-lookup')
})

context('Phone Number Lookup API Text Link on API Reference Page', () => {
  testTextLink('/apis/','Phone Number Lookup API', 'apis/number-lookup')
})

context('Multi-Factor Authentication API SVG Link on API Reference Page', () => {
  testSvgLink('/apis/','svg[alt="Multi-Factor Authentication API"]', 'apis/multifactorauth')
})

context('Multi-Factor Authentication API Text Link on API Reference Page', () => {
  testTextLink('/apis/','Multi-Factor Authentication API', 'apis/multifactorauth')
})

context('International Messaging API SVG Link on API Reference Page', () => {
  testSvgLink('/apis/','svg[alt="International Messaging API"]', 'apis/messaging-international')
})

context('International Messaging API Text Link on API Reference Page', () => {
  testTextLink('/apis/','International Messaging API', 'apis/messaging-international')
})

context('Emergency Notifications API SVG Link on API Reference Page', () => {
  testSvgLink('/apis/','svg[alt="Emergency Notifications API"]', 'apis/dash-notifications')
})

context('Emergency Notifications API Text Link on API Reference Page', () => {
  testTextLink('/apis/','Emergency Notifications API', 'apis/dash-notifications')
})

context('Insights API SVG Link on API Reference Page', () => {
  testSvgLink('/apis/','svg[alt="Insights API"]', 'apis/insights')
})

context('Insights API Text Link on API Reference Page', () => {
  testTextLink('/apis/','Insights API', 'apis/insights')
})

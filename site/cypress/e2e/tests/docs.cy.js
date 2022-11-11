import {testTextLink, testSvgLink} from '../../utils/utils'

context('Account Text Link', () => {
  testTextLink('/docs', 'Account', 'docs/account', '[data-cy="textLink"]')
})

context('Account SVG Link', () => {
  testSvgLink('/docs/','svg[alt="Account"]', 'docs/account')
})

context('Numbers Text Link', () => {
  testTextLink('/docs','Numbers','docs/numbers', '.textLink_src-components-css-ItemGrid-module')
})

context('Numbers SVG Link', () => {
  testSvgLink('/docs/','svg[alt="Numbers"]', 'docs/numbers')
})

context('Voice Text Link', () => {
  testTextLink('/docs','Voice', 'docs/voice', '.textLink_src-components-css-ItemGrid-module')
})

context('Voice SVG Link', () => {
  testSvgLink('/docs/','svg[alt="Voice"]', 'docs/voice')
})

context('Messaging Text Link', () => {
  testTextLink('/docs','Messaging','docs/messaging', '.textLink_src-components-css-ItemGrid-module')
})

context('Messaging SVG Link', () => {
  testSvgLink('/docs/','svg[alt="Messaging"]', 'docs/messaging')
})

context('WebRTC Text Link', () => {
  testTextLink('/docs','WebRTC', 'docs/webrtc' ,'.textLink_src-components-css-ItemGrid-module')
})

context('WebRTC SVG Link', () => {
  testSvgLink('/docs/','svg[alt="WebRTC"]', 'docs/webrtc')
})

context('Multi-Factor Authentication Text Link', () => {
  testTextLink('/docs','Multi-Factor Authentication', 'docs/mfa' ,'.textLink_src-components-css-ItemGrid-module')
})

context('Multi-Factor Authentication SVG Link', () => {
  testSvgLink('/docs/','svg[alt="Multi-Factor Authentication"]', 'docs/mfa')
})

context('Emergency Text Link', () => {
  testTextLink('/docs','Emergency', 'docs/emergency' ,'.textLink_src-components-css-ItemGrid-module')
})

context('Emergency SVG Link', () => {
  testSvgLink('/docs/','svg[alt="Emergency"]', 'docs/emergency')
})

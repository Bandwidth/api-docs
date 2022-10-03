import {testTextLink} from '../../utils/utils'

context('Account Link', () => {
  testTextLink('/docs', 'Account', 'docs/account', '.textLink_src-components-css-ItemGrid-module')
})

context('Numbers Link', () => {
  testTextLink('/docs','Numbers','docs/numbers', '.textLink_src-components-css-ItemGrid-module')
})

context('Voice Link', () => {
  testTextLink('/docs','Voice', 'docs/voice', '.textLink_src-components-css-ItemGrid-module')
})

context('Messaging Link', () => {
  testTextLink('/docs','Messaging','docs/messaging', '.textLink_src-components-css-ItemGrid-module')
})

context('WebRTC Link', () => {
  testTextLink('/docs','WebRTC', 'docs/webrtc' ,'.textLink_src-components-css-ItemGrid-module')
})

context('Multi-Factor Authentication Link', () => {
  testTextLink('/docs','Multi-Factor Authentication', 'docs/mfa' ,'.textLink_src-components-css-ItemGrid-module')
})

context('Emergency Link', () => {
  testTextLink('/docs','Emergency', 'docs/emergency' ,'.textLink_src-components-css-ItemGrid-module')
})

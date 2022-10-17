import {testTextLink, extLinkTester} from '../../utils/utils'

context('Account Management Link', () => {
  testTextLink('/docs','Account Management','docs/account', '.docs-intro-grid-item')
})

context('Numbers Link', () => {
  testTextLink('/docs','Numbers','docs/numbers', '.docs-intro-grid-item')
})

context('Voice Link', () => {
  testTextLink('/docs','Voice', 'docs/voice', '.docs-intro-grid-item')
})

context('Messaging Link', () => {
  testTextLink('/docs','Messaging','docs/messaging', '.docs-intro-grid-item')
})

context('WebRTC Link', () => {
  testTextLink('/docs','WebRTC', 'docs/webrtc' ,'.docs-intro-grid-item')
})

context('Multi-Factor Authentication Link', () => {
  testTextLink('/docs','Multi-Factor Authentication', 'docs/mfa' ,'.docs-intro-grid-item')
})

context('Emergency Services Link', () => {
  testTextLink('/docs','Emergency Services', 'docs/emergency' ,'.docs-intro-grid-item')
})

context('Next - Versions Link', () => {
  testTextLink('/docs','Versions', 'docs/versions' ,'a.pagination-nav__link')
})

context('Edit This Page Link', () => {
  extLinkTester('/docs', 'a.theme-edit-this-page', 'https://github.com/Bandwidth/api-docs/edit/main/site/docs/intro.mdx')
})

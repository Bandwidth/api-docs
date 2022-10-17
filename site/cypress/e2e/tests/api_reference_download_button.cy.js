import {downloadButtonTester} from '../../utils/utils'

context('Verify download button exists in the Voice API Reference Page', () => {
  downloadButtonTester('voice')
  }) 

  context('Verify download button exists in the Messaging API Reference Page', () => {
    downloadButtonTester('messaging')
  }) 

  context('Verify download button exists in the Dash API Reference Page', () => {
    downloadButtonTester('dash')
  }) 

  context('Verify download button exists in the WebRTC API Reference Page', () => {
    downloadButtonTester('webrtc')
  }) 

  context('Verify download button exists in the Phone Number Lookup API Reference Page', () => {
    downloadButtonTester('number-lookup')
  }) 

  context('Verify download button exists in the Multi-Factor Authentication API Reference Page', () => {
    downloadButtonTester('multifactorauth')
  }) 

  context('Verify download button exists in the International A2P Messaging API Reference Page', () => {
    downloadButtonTester('messaging-international')
  }) 

  context('Verify download button exists in the Dash Notifications API Reference Page', () => {
    downloadButtonTester('dash-notifications')
  }) 

  context('Verify download button exists in the Insights API Reference Page', () => {
    downloadButtonTester('insights')
  })

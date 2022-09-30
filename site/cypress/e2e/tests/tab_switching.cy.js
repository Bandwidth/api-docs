import {tabSwitchingTester} from '../../utils/utils'


context('Verifying that the code examples react tab actually switches examples in the docs pages', () => {
  tabSwitchingTester('/docs/voice/bxml/pause/', 'div.language-xml', 'div.language-java', 'li.tabs__item', 'Java')
})

context('Verifying that the code request tabs switch properly in the api references pages', () => {
  tabSwitchingTester('/apis/voice/', '#react-tabs-35', '#react-tabs-41', '#react-tabs-40', 'Node.js' )
})

context('Verifying that the code response tabs switch properly in the api references pages', () => {
  tabSwitchingTester('/apis/voice/', '#react-tabs-49', '#react-tabs-51', '#react-tabs-50', '400' )
})


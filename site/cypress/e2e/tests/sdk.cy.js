import {navTester, testSvgLink, testTextLink} from '../../utils/utils'

context('Node SDK SVG Link on SDK Page', () => {
  testSvgLink('/sdks/','svg[alt="Node"]')
  navTester('sdks/node')
})

context('Numbers Docs Text Link on SDK Page', () => {
  testTextLink('/sdks/','Node')
  navTester('sdks/node')
})

context('Java SDK SVG Link on SDK Page', () => {
  testSvgLink('/sdks/','svg[alt="Java"]')
  navTester('sdks/java')
})

context('Java Docs Text Link on SDK Page', () => {
  testTextLink('/sdks/','Java')
  navTester('sdks/java')
})

context('Ruby SDK SVG Link on SDK Page', () => {
  testSvgLink('/sdks/','svg[alt="Ruby"]')
  navTester('sdks/ruby')
})

context('Ruby Docs Text Link on SDK Page', () => {
  testTextLink('/sdks/','Ruby')
  navTester('sdks/ruby')
})

context('Python SDK SVG Link on SDK Page', () => {
  testSvgLink('/sdks/','svg[alt="Python"]')
  navTester('sdks/python')
})

context('Python Docs Text Link on SDK Page', () => {
  testTextLink('/sdks/','Python')
  navTester('sdks/python')
})

context('PHP SDK SVG Link on SDK Page', () => {
  testSvgLink('/sdks/','svg[alt="PHP"]')
  navTester('sdks/php')
})

context('PHP Docs Text Link on SDK Page', () => {
  testTextLink('/sdks/','PHP')
  navTester('sdks/php')
})

context('C# SDK SVG Link on SDK Page', () => {
  testSvgLink('/sdks/','svg[alt="C#"]')
  navTester('sdks/csharp')
})

context('C# Docs Text Link on SDK Page', () => {
  testTextLink('/sdks/','C#')
  navTester('sdks/csharp')
})

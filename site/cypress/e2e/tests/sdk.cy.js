import {testSvgLink, testTextLink} from '../../utils/utils'

context('Node SDK SVG Link on SDK Page', () => {
  testSvgLink('/sdks/','svg[alt="Node"]', 'sdks/node')
})

context('Numbers Docs Text Link on SDK Page', () => {
  testTextLink('/sdks/','Node', 'sdks/node')
})

context('Java SDK SVG Link on SDK Page', () => {
  testSvgLink('/sdks/','svg[alt="Java"]', 'sdks/java')
})

context('Java Docs Text Link on SDK Page', () => {
  testTextLink('/sdks/','Java', 'sdks/java')
})

context('Ruby SDK SVG Link on SDK Page', () => {
  testSvgLink('/sdks/','svg[alt="Ruby"]', 'sdks/ruby')
})

context('Ruby Docs Text Link on SDK Page', () => {
  testTextLink('/sdks/','Ruby', 'sdks/ruby')
})

context('Python SDK SVG Link on SDK Page', () => {
  testSvgLink('/sdks/','svg[alt="Python"]', 'sdks/python')
})

context('Python Docs Text Link on SDK Page', () => {
  testTextLink('/sdks/','Python', 'sdks/python')
})

context('PHP SDK SVG Link on SDK Page', () => {
  testSvgLink('/sdks/','svg[alt="PHP"]', 'sdks/php')
})

context('PHP Docs Text Link on SDK Page', () => {
  testTextLink('/sdks/','PHP', 'sdks/php')
})

context('C# SDK SVG Link on SDK Page', () => {
  testSvgLink('/sdks/','svg[alt="C#"]', 'sdks/csharp')
})

context('C# Docs Text Link on SDK Page', () => {
  testTextLink('/sdks/','C#', 'sdks/csharp')
})

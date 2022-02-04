import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../index.module.css';
import sdkStyles from '../../css/sdks.module.css';
import RunInPostman from '../../components/RunInPostman';
import ItemGrid from '../../components/gridItem'

const SdkList = [
  {
    title: 'Node',
    Svg: require('../../../static/img/bw-node.svg').default,
    style: sdkStyles.sdkSvg,
    link: '/sdks/node'
  },
  {
    title: 'Python',
    Svg: require('../../../static/img/bw-python.svg').default,
    style: sdkStyles.sdkSvg,
    link: '/sdks/python'
  },
  {
    title: 'Ruby',
    Svg: require('../../../static/img/bw-ruby.svg').default,
    style: sdkStyles.sdkSvg,
    link: '/sdks/ruby'
  },
  {
    title: 'Java',
    Svg: require('../../../static/img/bw-java.svg').default,
    style: sdkStyles.sdkSvg,
    link: '/sdks/java'
  },
  {
    title: 'C#',
    Svg: require('../../../static/img/bw-csharp.svg').default,
    style: sdkStyles.sdkSvg,
    link: '/sdks/csharp'
  },
  {
    title: 'PHP',
    Svg: require('../../../static/img/bw-php.svg').default,
    style: sdkStyles.sdkSvg,
    link: '/sdks/php'
  },
];

function Header() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Bandwidth SDKs</h1>
      <p className="hero__subtitle">Build Faster with Bandwidth</p>
      <div className={styles.PostmanContainer}>
        <RunInPostman />
      </div>
      </div>
    </header>
  );
}

export default function Sdks() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Bandwidth SDKs"
      description="Bandwidth API Reference, documentation, SDKs, guides, examples and more. Get everything you need to build with Bandwidth."
      keywords="Bandwidth,SDK,guide,documentation,resources,Java,C#,Node,JavaScript,Python,Ruby,PHP">
      <Header />
      <main>
        <ItemGrid itemList={SdkList} className={sdkStyles.sdks}/>
      </main>
    </Layout>
  );
}

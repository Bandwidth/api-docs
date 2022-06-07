import React from 'react';
import Layout from '@theme/Layout';
import homeStyles from '../css/home.module.css';
import twoColumnStyles from '../css/twoColumn.module.css';
import AnimatedGlobe from '../components/AnimatedGlobe';
import ItemGrid from '../components/ItemGrid';

const productList = [
  {
    title: 'Numbers',
    Svg: require('../../static/img/icon-numbers.svg').default,
    link: '/docs/numbers',
  },
  {
    title: 'Voice',
    Svg: require('../../static/img/icon-voice.svg').default,
    link: '/docs/voice',
  },
  {
    title: 'Messaging',
    Svg: require('../../static/img/icon-messaging.svg').default,
    link: '/docs/messaging',
  },
  {
    title: 'Emergency',
    Svg: require('../../static/img/icon-emergency.svg').default,
    link: '/docs/emergency',
  },
  {
    title: 'Multi-Factor Authentication',
    Svg: require('../../static/img/icon-mfa.svg').default,
    link: '/docs/mfa/about',
  },
  {
    title: 'WebRTC',
    Svg: require('../../static/img/icon-webrtc.svg').default,
    link: '/docs/webrtc',
  },
];

export default function Home() {
  return (
    <Layout
      title={`Home`}
      description="Bandwidth API Reference, documentation, SDKs, guides, examples and more. Get everything you need to build with Bandwidth."
      keywords="Bandwidth,API,documentation,SDK,guide">
      <div className={twoColumnStyles.landing}>
        <div className={twoColumnStyles.left}>
          <div className={twoColumnStyles.title}>
            <h1>Bandwidth API Documentation</h1>
            <h2>Learn about Bandwidth's product APIs</h2>
          </div>
          <div className={homeStyles.globe}>
            <AnimatedGlobe />
          </div>
        </div>
        <div className={twoColumnStyles.right}>
          <ItemGrid itemList={productList}/>
        </div>
      </div>
    </Layout>
  );
}

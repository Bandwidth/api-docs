import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageProducts from '../components/HomepageProducts';
import AnimatedGlobe from '../components/AnimatedGlobe';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Bandwidth API Reference, documentation, SDKs, guides, examples and more. Get everything you need to build with Bandwidth."
      keywords="Bandwidth,API,documentation,SDK,guide">
      <div className={styles.left}>
        <div className={styles.title}>
          <h1>Bandwidth API Documentation</h1>
          <h2>Learn about Bandwidth's product APIs</h2>
        </div>
        <div className={styles.globe}>
          <AnimatedGlobe />
        </div>
      </div>
      <div className={styles.right}>
        <HomepageProducts />
      </div>
    </Layout>
  );
}

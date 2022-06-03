import React from 'react';
import clsx from 'clsx';
import styles from './HomepageProducts.module.css';

const ProductList = [
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
    Svg: require('../../static/img/icon-WebRTC.svg').default,
    link: '/docs/webrtc',
  },
];

function Product({Svg, title, description, link}) {
  return (
    <div className={styles.product}>
      {/* <div className={styles.productSvg}> */}
        <a href={link}>
          <Svg className={styles.productSvg} alt={title} />
        </a>
      {/* </div> */}
      <div className="text--center padding-horiz--md">
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default function HomepageProducts() {
  return (
    <section className={styles.products}>
      <div className={styles.productContainer}>
        {ProductList.map((props, idx) => (
          <Product key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

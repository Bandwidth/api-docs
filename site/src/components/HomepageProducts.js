import React from 'react';
import clsx from 'clsx';
import styles from './HomepageProducts.module.css';

const ProductList = [
  {
    title: 'Numbers',
    Svg: require('../../static/img/icon-numbers.svg').default,
    link: '/docs/numbers',
    description: (
      <>
        We’ve got your number. In fact, we have as many of them as you want.
      </>
    ),
  },
  {
    title: 'Voice',
    Svg: require('../../static/img/icon-voice.svg').default,
    link: '/docs/voice',
    description: (
      <>
        Need to make a call? Placing and receiving phone calls is fast and easy with Bandwidth Voice.
      </>
    ),
  },
  {
    title: 'Messaging',
    Svg: require('../../static/img/icon-messaging.svg').default,
    link: '/docs/messaging',
    description: (
      <>
        Communication at its most basic. Adding SMS or MMS is a snap.
      </>
    ),
  },
  {
    title: 'Emergency',
    Svg: require('../../static/img/icon-emergency.svg').default,
    link: '/docs/emergency',
    description: (
      <>
        Connect your users to emergency services with fast, reliable, accurate E911 services.
      </>
    ),
  },
  {
    title: 'Multi-Factor Authentication',
    Svg: require('../../static/img/icon-mfa.svg').default,
    link: '/docs/mfa',
    description: (
      <>
        Easily add multi-factor authentication to your software, website, or application.
      </>
    ),
  },
  {
    title: 'WebRTC',
    Svg: require('../../static/img/icon-WebRTC.svg').default,
    link: '/docs/webrtc',
    description: (
      <>
        Quickly add voice calling to your web-based applications without the need for any telecom infrastructure.
      </>
    ),
  },
];

function Product({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
      <a href={link}>
        <Svg className={styles.productSvg} alt={title} />
      </a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageProducts() {
  return (
    <section className={styles.products}>
      <div className="container">
        <div className="row">
          {ProductList.map((props, idx) => (
            <Product key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

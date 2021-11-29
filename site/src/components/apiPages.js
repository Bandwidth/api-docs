import React from 'react';
import clsx from 'clsx';
import styles from '../css/apis.module.css';


const ApiList = [
    {
        title: 'Numbers',
        Svg: require('../../static/img/icon-numbers.svg').default,
        link: '/apis/numbers'
    },
    {
        title: 'Phone Number Lookup',
        Svg: require('../../static/img/icon-numbers.svg').default,
        link: '/apis/number-lookup'
    },
    {
        title: 'Voice',
        Svg: require('../../static/img/complex-icon-phone-cloud.svg').default,
        link: '/apis/voice'
    },
    {
        title: 'Messaging',
        Svg: require('../../static/img/complex-icon-messages.svg').default,
        link: '/apis/messaging'
    },
    {
        title: 'International Messaging',
        Svg: require('../../static/img/icon-messaging.svg').default,
        link: '/apis/messaging-international'
    },
    {
        title: 'Multi-Factor Authentication',
        Svg: require('../../static/img/icon-mfa.svg').default,
        link: '/apis/multifactorauth'
    },
    {
        title: 'WebRTC',
        Svg: require('../../static/img/icon-WebRTC.svg').default,
        link: '/apis/webrtc'
    },
    {
        title: 'DASH',
        Svg: require('../../static/img/icon-emergency-dashboard.svg').default,
        link: '/apis/dash'
    },
    {
        title: 'DASH Notifications',
        Svg: require('../../static/img/icon-emergency-calling.svg').default,
        link: '/apis/dash-notifications'
    },
];

function Api({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link}>
          <div className="text--center">
            <Svg className={styles.apiSvg} alt={title} />
          </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      </a>
    </div>
  );
}

export default function ApiPages() {
  return (
    <section className={styles.apis}>
      <div className="container">
        <div className="row">
          {ApiList.map((props, idx) => (
            <Api key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

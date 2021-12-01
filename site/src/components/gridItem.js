import React from 'react';
import clsx from 'clsx';
import styles from '../css/apis.module.css';

function Item({Svg, title, description, link}) {
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

export default function ItemGrid(itemList) {
  return (
    <section className={styles.apis}>
      <div className="container">
        <div className="row">
          {itemList.map((props, idx) => (
            <Item key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

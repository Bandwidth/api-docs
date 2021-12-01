import React from 'react';
import clsx from 'clsx';

function Item({Svg, style, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link}>
          <div className="text--center">
            <Svg className={style} alt={title} />
          </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      </a>
    </div>
  );
}

export default function ItemGrid(props) {
  return (
    <section className={props.className}>
      <div className="container">
        <div className="row">
          {props.itemList.map((props, idx) => (
            <Item key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

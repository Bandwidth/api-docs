import React from 'react';
import styles from './css/ItemGrid.module.css';

function Item({Svg, title, link}) {
    return (
        <div className={styles.item}>
            <a href={link}>
                <Svg className={styles.itemSvg} alt={title} />
            </a>
            <div className="text--center padding-horiz--md">
            <h2>{title}</h2>
            </div>
        </div>
    );
}

export default function ItemGrid({itemList}) {
    return (
        <div className={styles.items}>
            {itemList.map((props, idx) => (
                <Item key={idx} {...props} />
            ))}
        </div>
    );
}
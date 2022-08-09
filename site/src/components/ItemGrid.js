import React from 'react';
import itemGridStyles from './css/ItemGrid.module.css';

function Item({Svg, title, link}) {
    return (
        <div className={itemGridStyles.item}>
            <a href={link} className={itemGridStyles.itemImage}>
                <Svg className={itemGridStyles.itemSvg} alt={title} />
            </a>
            <div className={itemGridStyles.itemText}>
                <h3>{title}</h3>
            </div>
        </div>
    );
}

export default function ItemGrid({itemList}) {
    return (
        <div className={itemGridStyles.items}>
            {itemList.map((props, idx) => (
                <Item key={idx} {...props} />
            ))}
        </div>
    );
}

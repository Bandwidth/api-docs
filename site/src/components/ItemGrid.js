import React from 'react';
import itemGridStyles from './css/ItemGrid.module.css';

function Item({Svg, title, link}) {
    return (
        <div className={itemGridStyles.item}>
            <div className={itemGridStyles.image}>
                <a href={link}>
                    <Svg className={itemGridStyles.itemSvg} alt={title} />
                </a>
            </div>
            <h2>{title}</h2>
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

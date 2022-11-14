import React from 'react';
import itemGridStyles from '@site/src/components/css/ItemGrid.module.css';

function Item({Svg, title, link}) {
    return (
        <div className={itemGridStyles.item}>
            <a href={link} className={itemGridStyles.itemImage}>
                <Svg className={itemGridStyles.itemSvg} alt={title}/>
            </a>
            <div className={itemGridStyles.itemText}>
                <a href={link} className={itemGridStyles.textLink} data-cy="textLink"><h3>{title}</h3></a>
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

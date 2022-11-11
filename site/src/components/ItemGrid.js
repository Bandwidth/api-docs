import React from 'react';

function Item({Svg, title, link}) {
    return (
        <div className={'item'}>
            <a href={link} className={'itemImage'}>
                <Svg className={'itemSvg'} alt={title}/>
            </a>
            <div className={'itemText'}>
                <a href={link} className={'textLink'} data-cy="textLink"><h3>{title}</h3></a>
            </div>
        </div>
    );
}

export default function ItemGrid({itemList}) {
    return (
        <div className={'itemGridItems'}>
            {itemList.map((props, idx) => (
                <Item key={idx} {...props} />
            ))}
        </div>
    );
}

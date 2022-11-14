import React from 'react';
// import footerStyles from '@site/src/css/footer.module.css';

export default function FooterColumn({menus}) {
    return (
        <div className={'column'}>
            {menus.map((props, idx) => (
                <div key= {idx} className={'menu'}>
                    <div className={'menuTitle'}>{props.title}</div>
                        {props.items.map((props, idx) => (
                            <div key={idx} className={'menuLink'}><a href={props.to}>{props.label}</a></div>
                        ))}
                </div>
            ))}
        </div>
    )
}

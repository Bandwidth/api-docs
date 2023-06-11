import React from 'react';

export default function FooterColumn({menus}) {
    return (
        <div className="column">
            {menus.map((props, idx) => (
                <div key= {idx} className="menu">
                    <div className="menu-title">{props.title}</div>
                        {props.items.map((props, idx) => (
                            <div key={idx} className="menu-link"><a href={props.to}>{props.label}</a></div>
                        ))}
                </div>
            ))}
        </div>
    )
}

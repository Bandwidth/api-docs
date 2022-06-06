import React from 'react';
import styles from './css/ProductGrid.module.css';

function Product({Svg, title, link}) {
    return (
        <div className={styles.product}>
            <a href={link}>
                <Svg className={styles.productSvg} alt={title} />
            </a>
            <div className="text--center padding-horiz--md">
            <h2>{title}</h2>
            </div>
        </div>
    );
}

export default function ProductGrid({productList}) {
    return (
        <div className={styles.products}>
            {productList.map((props, idx) => (
                <Product key={idx} {...props} />
            ))}
        </div>
    );
}
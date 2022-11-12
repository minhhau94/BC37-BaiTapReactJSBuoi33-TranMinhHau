import React, { Component } from 'react';
import ProductItem from './ProductItem';
import styles from "./ProductList.module.css";

export default class ProductList extends Component {
    products = [
        { id: 1, name: "iPhone 14", price: 1400 },
        { id: 2, name: "samsung A22", price: 1000 },
        { id: 3, name: "apple watch S4", price: 500 },
    ];

    // [{}, {}, ...] => [div.col, div.col, ...]
    renderProduct = () => {
        const html = this.products.map((item) => {
            return (
                // khi chuyển đổi qua hàm map mỗi thẻ div pghair có 1 cái key để định danh, key phải duy nhất 
                <div key={item.id} className={styles.col}>
                    {/* tên đặt tùy ý vd: SP để truyền giá trị vào con, truyền số lượng giá trị không giới hạn*/}
                    <ProductItem SP={item}/>
                </div>
            );
        });
        return html;
    };

    render() {
        
        return (
            <div>
                <h1>Danh sách sản phẩm</h1>
                <div className={styles.row}>
                    {this.renderProduct()}
                </div>
            </div>
        )
    }
};

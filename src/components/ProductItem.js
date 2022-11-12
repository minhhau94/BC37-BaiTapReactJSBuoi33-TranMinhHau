import React, { Component } from 'react';
import style from "./ProductItem.module.css";

export default class ProductItem extends Component {
    // thuộc tính props có sẵng trong react, để truyền iotem vào thì gọi cú pháp this.props."tên"
//    props lấy hết tât cả giá trị cha truyền cho con
    render() {
        return (
            <div>
                <div className={style.item}>
                    <h3>Tên sản phẩm: {this.props.SP.name}</h3>
                    <p>Giá: {this.props.SP.price}</p>
                </div>
            </div>
        )
    }
}

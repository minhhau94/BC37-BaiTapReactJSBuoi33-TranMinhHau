import React, { Component } from 'react';
import style from "./ProductItem.module.css";

export default class ProductItem extends Component {

  render() {
    const {name, price, image} = this.props.SPItem;

    return (
      <div className={style.item}>
        <img alt='' src={image}/>
        <h4>Tên: {name}</h4>
        <h4>Giá: {price}</h4>
        {/* nếu chạy 1 dòng thì có thể bỏ {} */}
        <button 
        onClick={ () => this.props.addToCart(this.props.SPItem)} 
        className={style.btn}
        >Add To Cart</button>

        {/* hàm có tham số đầu vào phải bọc trong aero function */}
        <button 
        onClick={ () => {this.props.setSelectedItem(this.props.SPItem);}} 
        className={style.btn}
        >Xem chi tiết</button>
      </div>
    )
  }
}

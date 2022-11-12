import React, { Component } from 'react'

export default class ProductDetail extends Component {
  render() {
    const {name, price, image, decription, quantity} = this.props.detail;
    
    return (
      <div style={{border: "1px solid red", padding: 30}}>
        <h2>Tên: {name}</h2>
        <img alt='' src={image}/>        
        <h4>Giá: {price}</h4>
        <p>Mô tả: {decription}</p>
        <h4>Số lượng: {quantity}</h4>
      </div>
    )
  }
}

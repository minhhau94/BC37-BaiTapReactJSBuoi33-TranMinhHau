import React, { Component } from 'react'

export default class Cart extends Component {
  calcTotalAmount = () => {
    return this.props.cartList.reduce((total, item) => {
      return total + item.quantity * item.product.price;
      // giá trị khởi tạo mặc định của total là 0
    }, 0);
  };

  render() {
    return (
      <div className='position-fixed w-100 h-100 top-0 left-0' style={{
        backgroundColor: 'rgba(0,0,0,0.8)',
      }}
      >
        <div className='w-50 bg-white position-absolute p-5'
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <button
            onClick={this.props.hideCart}
            className='btn btn-dark position-absolute'
            style={{
              top: 10,
              right: 10,
            }}>X</button>
          <h1 className='text-center fs-3'>Giỏ hàng</h1>
          <table className='table'>
            <thead>
              <tr>
                <th>Mã SP</th>
                <th>Tên SP</th>
                <th>Hình Ảnh</th>
                <th>Số Lượng</th>
                <th>Đơn Giá</th>
                <th>Thành Tiền</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.cartList.map((item) => {
                return (
                  <tr>
                    <td>{item.product.id}</td>
                    <td>{item.product.name}</td>
                    <td>
                      <img alt='' src={item.product.image}
                        style={{ width: 100 }} />
                    </td>
                    <td>
                      <button
                        className='btn btn-info'
                        onClick={() => {
                          this.props.decreaseQuantity(item.product.id)
                        }}
                      > - </button>
                      <span className='mx-2 fs-6'>{item.quantity}</span>
                      <button
                        className='btn btn-info'
                        onClick={() => {
                          this.props.increaseQuantity(item.product.id)
                        }}
                      > + </button>
                    </td>
                    <td>${item.product.price} </td>
                    <td>${item.quantity * item.product.price}</td>
                    <td>
                      <button className='btn btn-danger' onClick={() => this.props.deleteCartItem(item.product.id)}> Xóa </button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={7} className="text-end">Tổng: {this.calcTotalAmount()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}




// xóa sản phẩm
// tăng giảm số lượng
// thêm show tổng tiền
// thêm nút thanh toán, khi click => reset cart về rỗng, ẩn cart

import React, { Component } from 'react'
import style from "./DemoDataBinding.module.css"
import clsx from 'clsx';

export default class DemoDataBinding extends Component {
    //tạo biến fullName như tạo 1 đối tượng
    fullName = "Hau";
    age = 27;

    state = {
        isLogin: false,
    };

    showMessage() {
        return <h1>hello word</h1>;
    };

    showAlert1() {
        alert("warning....");
    };

    showAlert2(message) {
        alert(message);
    };

    //dùng aero function vì aero không có this, this là class bên ngoài, nếu không chuyển thì k hiểu this của fullName, this đc đặt trong button, nên this có gái trị khác, không pahir là class demoDataBindung
    //vấn đề này xảy ra khi gắn sự kiện
    showAlert3 = () => {
        alert(this.fullName + this.age);
    };

    handleLogin = () => {
        //imutable: cơ chế của react không cho phép chỉnh sửa trực tiếp
        //chỉnh sửa state qua hàm this.setState()
        this.setState({
            isLogin: true,
        });
    };

    handleLogout = () => {
        this.setState({
            isLogin: false,
        });
    };

    renderLogin() {
        if (this.state.isLogin) {
            return (
                // inline css trong obj {}
                <div style={{
                    backgroundColor: "yellow",
                    // để 300 hoặc "300px"
                    width: 300,
                    padding: 30,
                }}>
                    <h2 className={style.tittle}>wellcome</h2>
                    <button className={style.btn} onClick={this.handleLogout}>Log out</button>
                </div>
            );
        }
        // kết hợp 2 class với nhau
        //dùng clsx (class1, class2 {có thể gắn 1 obi để xét đk true haowcj false cho class})
        //stule.btn2 là biến nên đặt trong []
        return <button className={ clsx(style.btn, style.btn1, {[style.btn2]: true}) } onClick={this.handleLogin}>Login</button>
    };

    render() {
        return (
            <div>
                {this.renderLogin()}

                {/* <h1>Hello, {this.fullName}. I am {this.age - 7}</h1>
        { this.showMessage() }
        <button onClick={ this.showAlert1 }>Alert 1</button>
        <button onClick={ () => {this.showAlert2("hello")} }>Alert 2</button>
        <button onClick={ this.showAlert3 }>Alert 3</button> */}
            </div>
        );
    };
}

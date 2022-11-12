import React, { Component } from 'react';
import BlackCar from "../assets/img/black-car.jpg";
import RedCar from "../assets/img/red-car.jpg";
import Silver from "../assets/img/silver-car.jpg";
import Steel from "../assets/img/steel-car.jpg";

export default class Home extends Component {
    state = {
        carImage: BlackCar,
    }

    handleChangeColor = (img) => {
        this.setState({
            carImage: img,
        });        
    };

  render() {
    return (
      <div>
        <img src= {this.state.carImage} alt='' style={{width: 500}} />
        <h2>Pick color</h2>
        <button onClick={() => {
            this.handleChangeColor(BlackCar);
            }}>Black</button>
        <button onClick={() => {
            this.handleChangeColor(RedCar);
            }}>Red</button>
        <button onClick={() => {
            this.handleChangeColor(Silver);
            }}>Silver</button>
        <button onClick={() => {
            this.handleChangeColor(Steel);
            }}>Steel</button>
      </div>
    );
  }
}

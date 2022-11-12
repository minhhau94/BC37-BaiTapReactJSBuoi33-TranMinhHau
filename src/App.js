import React from "react";
import './App.css';
import DemoDataBinding from "./components/DemoDataBinding";
import MovieList from "./components/MovieList";
import ProductList from "./components/ProductList";
import Home from "./EX1/Home";
import HomeEx2 from "./EX2/Home";
import ProductListEX3 from "./EX3/ProductList"

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Home /> */}
        <button className='btn'>Learn react</button>
        {/* <DemoDataBinding />
        <Home />
        <HomeEx2 />
        <ProductList />
        <MovieList /> */}
        <ProductListEX3 />
      </div>    
    );
  }
}

export default App;

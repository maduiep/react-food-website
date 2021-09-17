import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import { productData, productDataTwo } from "./components/Products/ProductData";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favourite meal" data={productData}/>
      <Features />
      <Products heading="Good Treats for you" data={productDataTwo}/>
      <Footer />
    </Router>
  );
}

export default App;

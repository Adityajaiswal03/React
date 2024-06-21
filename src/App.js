import './App.css';
import Products from './Components/Product/Products.js';
import { useState } from 'react';
function App() {
  let [cart,setCart]=useState({});
  function increament(product) {
    let newCart={...cart}
      if(!cart[product.id]){
          newCart[product.id]={
            id:product.id,  
            title:product.title,
            price:product.price,
            quanitity:0
          };
      }
      newCart[product.id].quanitity=newCart[product.id].quanitity+1;
      setCart(newCart);
      console.log(newCart);
  }
  function decreament(product) {
      let newCart = { ...cart }
      if(!cart[product.id]){
          return;
      }
      newCart[product.id].quanitity=newCart[product.id].quanitity-1;
      if(newCart[product.id].quanitity<=0){
          delete newCart[product.id];
      }
      setCart(newCart);
  }
  return (
    <div className="App">
        <Products cart={cart} increament={increament} decreament={decreament}/>
    </div>
  );
}

export default App;

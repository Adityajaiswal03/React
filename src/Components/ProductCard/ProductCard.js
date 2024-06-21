import "./ProductCard.css";
import AddToCart from "../AddToCart/AddToCart.js";
import Effect from "../Effect/Effect.jsx";
import { useRef, useState} from "react";

function ProductCard({product,cart,increament,decreament}){

    let pRef = useRef(0);
    function printTitle(){
        console.log("Price show");
        if(pRef.current.className==="hide"){
            pRef.current.className = "show";
        }else{
            pRef.current.className = "hide";
        }
        
        console.log(pRef.className);
    }
    return (
        <div>
            <div className="product-card">
                <p onClick={printTitle}>{product.title}</p>
                <p ref={pRef} className="show">
                    {product.price.value}
                </p>
                <AddToCart product={product} cart={cart} increament={increament} decreament={decreament}/>
                <Effect />
            </div>
        </div>
    );
}
export default ProductCard;
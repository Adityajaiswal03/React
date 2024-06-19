import "./ProductCard.css"
import "./AddToCart.js"
import "./Effect.jsx"

import { useRef, useState} from "react";
import AddToCart from "./AddToCart.js";
// import Effect from "./Effect.jsx";

function ProductCard({title,price}){

    let pRef = useRef(0);
    let inputRef=useRef(0);
    let outputRef=useRef(0);
    let [inputV, setInputV] = useState('');

    function printTitle(){
        console.log("Price show");
        if(pRef.current.className==="hide"){
            pRef.current.className = "show";
        }else{
            pRef.current.className = "hide";
        }
        
        console.log(pRef.className);
    }
    function logInput(e){
        // titleRef.current.innerText= inputRef.current.valueOf;
        setInputV(e.target.value);
    }
    return (
        <div>
            <div className="product-card">
                <p onClick={printTitle}>{title}</p>
                <p ref={pRef} className="show">
                    {price.value}
                </p>
                <input ref={inputRef} onChange={logInput} value={inputV} />
                <p ref={outputRef}>{inputV}</p>
                <AddToCart inputV={inputV} />
                {/* <Effect /> */}
            </div>
        </div>
    );
}
export default ProductCard;
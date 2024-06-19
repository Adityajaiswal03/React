import { useState, useEffect } from "react";

function Effect(){
    let [count,setCount]=useState(0);
    let [count1,setCount1]=useState(0);
    console.log("rerendered Effects");
    useEffect(function(){
        console.log("Mounted");
    },[count])
    function increament(){
        setCount(count+1);
    }
    function increament1() {
        setCount1(count1 + 1);
    }
    return (
        <div>
            <button onClick={increament}>
                <p>
                    {count}
                </p>
            </button>
            <button onClick={increament1}>
                <p>
                    {count1}
                </p>
            </button>
        </div>
    );
}

export default Effect;
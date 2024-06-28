import { defaultSerializeQueryArgs } from "@reduxjs/toolkit/query"
import { useEffect, useState } from "react";

function Categories(){
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch("").then(
            (res)=>{
                return res.json;
            }
        ).then(
            (res)=>{
                console.log(res);
                setCategories(res);
            }
        )
    },[]);
    return(
        <div>
            {
                categories.map((item)=>{
                    return(
                        <div key={item.id}>

                        </div>
                    );
                })
            }
        </div>
    )
}
export default Categories;
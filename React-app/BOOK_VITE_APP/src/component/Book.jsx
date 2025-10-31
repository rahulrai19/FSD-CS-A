import React from 'react'
import './Book.css'
import { useState } from 'react'

const Book = () =>{
    function handleAddtoCart(){
        alert("Added to cart Successfully")
    }
    const [count,setCount] = useState(0);
    function increment(){
       setCount(count+1);
    }
    function decrement(){
        setCount(count-1);
    }
    return(
        <div className="card">
            <img src="https://m.media-amazon.com/images/I/71iODHO2fIL.jpg" alt="book image" width={200}/>
           <h3>Title:Physics</h3>
           <h4>Price:₹450</h4>
           <div>
            <button onClick={decrement}>-
            </button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
           </div>
           <button onClick={handleAddtoCart}>Add to Cart</button>
        </div>
    );
}

export default Book;
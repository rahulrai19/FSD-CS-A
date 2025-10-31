import React from 'react'
import './Book.css'

const Book = () =>{
    return(
        <div className="card">
            <img src="https://m.media-amazon.com/images/I/71iODHO2fIL.jpg" alt="book image" width={200}/>
           <h3>Title:Physics</h3>
           <h4>Price:₹450</h4>
           <button>Add to Cart</button>
        </div>
    );
}

export default Book;
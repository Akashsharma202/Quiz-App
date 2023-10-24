import React, { useEffect } from 'react'
import './Search.css';

const Cart = (props) => {
  return (
    <>
      <div className='main'>
        {!props.cart? <h2>No &#128218; In the Cart</h2>:
          props.cart.map((Element) => (
            <div className="card" style={{ width: "18rem" }} key={Element._id}>
              <img className="card-img-top" src={Element.ImgLink} style={{ height: "196px" }} alt={Element._id} />
              <div className="card-body">
                <h5 className="card-title">{Element.BookName}</h5>
                <p className="card-text">
                  <b>Author Name: </b>{Element.AuthorName}
                  <br />
                </p>
                
                <button className='btn btn-danger mx-5' onClick={() => {
                  // Use the correct syntax for the filter function callback
                  props.setCart(props.cart.filter((element) => element._id !== Element._id));
                  props.setCost(props.cost-Element.Price);
                }}>Delete</button>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}

export default Cart

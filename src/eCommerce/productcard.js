import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,addtocart } from '../slices/cartSlices'



const Productcard = ({product}) => {
    const dispatch = useDispatch()
    return (
        <div style={{width:"150px",height:"200px",backgroundColor:"yellowgreen",borderRadius:"6px"}}>
              <button onClick={()=>dispatch(addtocart(product))}>Add to cart</button>
        </div>
    )
}

export default Productcard

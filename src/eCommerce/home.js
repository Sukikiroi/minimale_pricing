import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,addtocart } from '../slices/cartSlices'
import Body from "./body"
const Home = () => {
    const count = useSelector(state => state.value)
    const cart = useSelector(state => state.shopingcart)

    const dispatch = useDispatch()
    console.log(count)
    console.log(cart)
    return (
        <div>
            {count}

            {/* <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button> */}


          
            <Body/>
        </div>
    )
}

export default Home

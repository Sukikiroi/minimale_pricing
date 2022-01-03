import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../slices/cartSlices'

const Home = () => {
    const count = useSelector(state => state.value)
    const dispatch = useDispatch()
    console.log(count)
    return (
        <div>
            {count}

            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default Home

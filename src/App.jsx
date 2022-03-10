import React from 'react'
import { useDispatch } from 'react-redux'
import { setCount } from './store/reducers/repoReducer'

const App = () => {
    const dispatch = useDispatch()
    const settings = {secondsPerClick: 6}

    const onCountClick = () => {
        dispatch(setCount(5))
    }
    return (
        <div>
            <button onClick={()=>onCountClick()}>counter</button>    
            text
        </div>
    )
}


export default App
import { useState } from 'react'
import './styles.css'
const App = () => {
    const [counter, setCounter] = useState(0)
    const [values, setValues] = useState('')

    const handleClick = () => {
        setCounter(counter + 1)
        setValues(values.concat(counter))
    }

    return (
        <div className='container'>
            <h1>Hello Vic</h1>
            <button onClick={handleClick}>Click me!</button>
            <div><strong>{counter}</strong></div>
            <div><strong>{values}</strong></div>
        </div>
    )
}

export default App
import { useState } from 'react'
import './index.css'

const  ClickCounter= () => {
    const [count, setCount] = useState(0)

const onIncrement = () =>{
    setCount(prevState => prevState+1)
}
    return(
        <div className="bg-container">
        <div className="main-container">
          <h1 className="heading">
            The Button has been clicked <br /> <span>{count}</span> times
          </h1>
          <p className="para">Click the button to increase the count!</p>
          <button className="button" onClick={onIncrement}>
            click me!
          </button>
        </div>
      </div>
    )
}


export default ClickCounter


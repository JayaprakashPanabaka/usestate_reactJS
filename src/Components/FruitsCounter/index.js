import { useState } from 'react'
import './index.css'

const FruitsCounter = () => {
    const [mango, setMango] = useState(0)
    const [banana, setBanana] = useState(0)

    const mangoCount = () => {
        setMango(prevCount => prevCount+1)
    }

    const bananaCount = () => {
        setBanana(prevCount => prevCount+1)
    }


    return (
        <div className="bg-container">
          <div className="main-container">
            <h1 className="heading">
              Bob ate <span>{mango}</span> mangoes <span>{banana}</span> bananas
            </h1>
            <div className="fruits-container">
              <div className="mangoes-container">
                <img
                  className="fruit-image"
                  src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                  alt="mango"
                />
                <button onClick={mangoCount} className="fruits-button">
                  Eat Mango
                </button>
              </div>
              <div className="bananas-container">
                <img
                  className="fruit-image"
                  src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                  alt="banana"
                />
                <button onClick={bananaCount} className="fruits-button">
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      )
}

export default FruitsCounter



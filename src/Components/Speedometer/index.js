import { useState } from 'react'
import './index.css'

const Speedometer = () => {
    const [speed, setSpeed] = useState(0)

    const onClickAccelerateButton = () =>{
        if (speed < 200) {
            setSpeed(prevSpeed => prevSpeed + 10)
        }
    }

    const onClickApplyBrakeButton = () => {
        if (speed > 0) {
            setSpeed(prevSpeed => prevSpeed - 10)
        }
    }
    return (
        <div className="bg-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
          <div className="main-container">
            <h1>Speed is <span>{speed}</span>mph</h1>
            <p className="para">Min limit is 0mph, Max limit is 200mph</p>
            <div className="btn-container">
              <button
                type="button"
                onClick={onClickAccelerateButton}
                className="accelerate"
              >
                Accelerate
              </button>
              <button
                type="button"
                onClick={onClickApplyBrakeButton}
                className="brakes"
              >
                Apply Brake
              </button>
            </div>
          </div>
        </div>
      )
}


export default Speedometer




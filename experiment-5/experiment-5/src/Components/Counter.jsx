import { useState } from 'react';
import './Counter.css'

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div className="counter-card">
      <h1>React Counter Application</h1>
      <p className="count-value">{count}</p>
      <div className="button-row">
        <button className="counter-btn" onClick={increment}>Increment (+)</button>
        <button className="counter-btn" onClick={decrement}>Decrement (-)</button>
      </div>
      <button className="counter-btn reset" onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter

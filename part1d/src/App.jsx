import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <h2> statistics </h2>
      <Display good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

const Display = (props) => {
  if (props.all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <Statistics {...props} />
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}> {text} </button>
  )
}
const Statistics = ({good, neutral, bad, all }) => {
  const posPercent = (good / all) * 100
  const avg = (good - bad) / all
  return (
    <div>
      <p>
        good {good} <br />
        neutral {neutral} <br />
        bad {bad} <br />
        all {all} <br />
        average {avg} <br />
        positive {posPercent} %
      </p>
    </div>
  )
}

export default App
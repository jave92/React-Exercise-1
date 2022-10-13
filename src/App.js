import { useState } from 'react'
import Button from './components/Button'
import Statistic from './components/Statistic'
import StatisticsBlock from './components/StatisticsBlock'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={()=>setGood(good+1)} text="Good"></Button>
      <Button handleClick={()=>setNeutral(neutral+1)} text="Neutral"></Button>
      <Button handleClick={()=>setBad(bad+1)} text="Bad"></Button>


      <StatisticsBlock good={good} neutral={neutral} bad={bad}></StatisticsBlock>


    </div>
  )
}

export default App
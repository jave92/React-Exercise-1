import React from 'react'
import Statistic from './Statistic'

const StatisticsBlock = ({good, neutral, bad}) => {
    if((good+neutral+bad) === 0){
        return (
            <>
              <h1>Statistics</h1>
              <p>No feedback given</p>
            </>
          )
    }
  return (
    <>
      <h1>Statistics</h1>
      <Statistic text="Good" value={good}></Statistic>
      <Statistic text="Neutral" value={neutral}></Statistic>
      <Statistic text="Bad" value={bad}></Statistic>
      <Statistic text="All" value={good+neutral+bad}></Statistic>
      <Statistic text="Average" value={(good*1+neutral*0+(bad*(-1)))/(good+neutral+bad)}></Statistic>
      <Statistic text="Positive" value={(good/(good+neutral+bad))*100 + " %"}></Statistic>
    </>
  )
}

export default StatisticsBlock
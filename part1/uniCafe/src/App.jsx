import { useState } from 'react'

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h2>{props.title_text}</h2>
    </div>
  )
}

const Button = (props) => { 

  console.log('props value is', props)
  const { handleClick, text } = props
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticLine = (props) => { 

  console.log('props value is', props)
  const { text, value } = props

  if (text == "positive"){
    return(
      <div>
        {text} {value} %
      </div>
    )
  }

  return (
    <div>
      {text} {value}
    </div>
  )
}

const Statistics = (props) => {
  
  console.log('props value is', props)
  const { good, neutral, bad, total, average} = props
  
  if (total == 0){
    return(
      <div>
        No feedback given
      </div>
    )
  }
  
  return(
  <div>
    <StatisticLine text={"good"} value={good}/>
    <StatisticLine text={"neutral"} value={neutral}/>
    <StatisticLine text={"bad"} value={bad}/>
    <StatisticLine text={"all"} value={total}/>
    <StatisticLine text={"average"} value={average/total}/>
    <StatisticLine text={"positive"} value={Number(good/total*100).toFixed(1)}/>
  </div>)

}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)

  const increaseByOneGood = () => {

    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(total + 1)
    setAverage(average + 1)
    console.log('good stats is', updatedGood)
  }

  const increaseByOneNeutral = () => {

    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(total + 1)
    console.log('neutral stats is', updatedNeutral)
  }

  const increaseByOneBad = () => {

    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(total + 1)
    setAverage(average - 1)
    console.log('bad stats is', updatedBad)
  }

  return (
    <div>
      <Header title_text={"give feedback"} />
      <Button handleClick={increaseByOneGood} text='good' />
      <Button handleClick={increaseByOneNeutral} text='neutral' />
      <Button handleClick={increaseByOneBad} text='bad' />
      <Header title_text={"statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} />
    </div>
  )
}

export default App
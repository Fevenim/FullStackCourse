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

const Stats = (props) => { 

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

  const checkState = () => {
    if (good || neutral || bad == 0){
      "No feedback given"
    }
    
  }

  return (
    <div>
      <Header title_text={"give feedback"} />
      <Button handleClick={increaseByOneGood} text='good' />
      <Button handleClick={increaseByOneNeutral} text='neutral' />
      <Button handleClick={increaseByOneBad} text='bad' />
      <Header title_text={"statistics"} />
      <Stats text={"good"} value={good}/>
      <Stats text={"neutral"} value={neutral}/>
      <Stats text={"bad"} value={bad}/>
      <Stats text={"all"} value={total}/>
      <Stats text={"average"} value={average/total}/>
      <Stats text={"positive"} value={Number(good/total*100).toFixed(1)}/>
    </div>
  )
}

export default App




/* import { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
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

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right) 
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)

    setTotal(left + right)
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

export default App
 */
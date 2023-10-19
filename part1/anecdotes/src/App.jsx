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
      <tr>
        <td>{text}</td>
        <td>{value} %</td>
      </tr>
    )
  }

  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
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
  <table>
    <tbody>
    <StatisticLine text={"good"} value={good}/>
    <StatisticLine text={"neutral"} value={neutral}/>
    <StatisticLine text={"bad"} value={bad}/>
    <StatisticLine text={"all"} value={total}/>
    <StatisticLine text={"average"} value={average/total}/>
    <StatisticLine text={"positive"} value={Number(good/total*100).toFixed(1)}/>
    </tbody>
  </table>)

}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)

  const forwardSelect = () => {
    const updatedSelected = selected + 1
    setSelected(updatedSelected)
    console.log('current count is', updatedSelected)
  }

  return (
    <div>
      {anecdotes[selected]}
      <Button handleClick={forwardSelect} text='next anecdote' />
    </div>
  )
}

export default App
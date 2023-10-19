import { useState } from 'react'

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h2>{props.title_text}</h2>
    </div>
  )
}
const Anecdote = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.anecdote_text}</p>
      <p>has {props.anecdote_votes} votes</p>
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

  const zeroArray = new Array(anecdotes.length).fill(0)
  const [votes, setVotes] = useState(zeroArray)
  const [selected, setSelected] = useState(0)
  const [mostVoted, setMostVoted] = useState(0)


  const randomSelect = () => {
    const updatedSelected = Math.floor(Math.random() * 8);
    setSelected(updatedSelected)
    console.log('selected anecdone number is', updatedSelected)
  }

  const upVote = () => {
    const updatedVotes = [...votes]
    updatedVotes[selected] += 1
    setVotes(updatedVotes)

    const highestVote = Math.max(...updatedVotes, mostVoted)
    const indexHighestVoted = updatedVotes.indexOf(highestVote)
    setMostVoted(indexHighestVoted)
    
    console.log('current vote count is', updatedVotes)
    console.log('current most voted is', indexHighestVoted)
  }

  if (votes[mostVoted] != 0){
    return(
    <div>
      <Header title_text={"Anecdote of the day"} />
      <Anecdote anecdote_text={anecdotes[selected]} anecdote_votes={votes[selected]}/>
      <Button handleClick={upVote} text='vote' />
      <Button handleClick={randomSelect} text='next anecdote' />
      <Header title_text={"Anecdote with most votes"} />
      <Anecdote anecdote_text={anecdotes[mostVoted]} anecdote_votes={votes[mostVoted]}/>
    </div>
    )
  }

  return (
    <div>
      <Header title_text={"Anecdote of the day"} />
      <Anecdote anecdote_text={anecdotes[selected]} anecdote_votes={votes[selected]}/>
      <Button handleClick={upVote} text='vote' />
      <Button handleClick={randomSelect} text='next anecdote' />
    </div>
  )
}

export default App
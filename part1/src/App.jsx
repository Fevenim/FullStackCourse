const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course_name}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.part_num} {props.ex_count}</p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Number of exercises {props.ex_num}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course_name={course} />
      <Content part_num={part1} ex_count={exercises1} />
      <Content part_num={part2} ex_count={exercises2} />
      <Content part_num={part3} ex_count={exercises3} />
      <Total ex_num={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App
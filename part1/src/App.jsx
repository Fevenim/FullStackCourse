const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course_name}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      {props.parts.map((element) => <Part part={element.name} exercise={element.exercises}/>)}
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Number of exercises {props.parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0)}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course_name={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
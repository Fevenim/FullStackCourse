const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ part }) => {
console.log("part props are", part)
const { name, exercises } = part

return(
  <p>
    {name} {exercises}
  </p>
)
}

const Content = (props) => {
  console.log("content props are", props)
  const part = props.part
  
  return(
    <div>
      {part.map(part => <Part key={part.id} part={part} />)}
    </div>
    )
  }

const Course = ({ course }) => {
  const { name, parts } = course

  return(
  <> 
  <Header course={name}  />
  <Content part={parts}  />
  </>
  )
}

const App = () => {
  
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App
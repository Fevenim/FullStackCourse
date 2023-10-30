import Course from "./components/Course"

const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ sum }) => <h4>Total of {sum} exercises</h4>

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
  const total = parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0)

  return(
  <> 
  <Header course={name}  />
  <Content part={parts}  />
  <Total sum={total}  />
  </>
  )
}

const App = () => {
  
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(courses => <Course key={courses.id} course={courses} />)}
    </div>
  )
}

export default App
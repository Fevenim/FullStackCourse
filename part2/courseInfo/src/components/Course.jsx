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
export default Course

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
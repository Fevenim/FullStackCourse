const Person = ({ person }) => {
    console.log("person name is", person.name)
    return (
      <div>{person.name} {person.number}</div>
    )
  }

export default Person
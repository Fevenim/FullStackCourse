const Filter = ({ value, onChange }) => {
    console.log("value is", value)
    return (
      <div>Filter shown with <input value={value} onChange={onChange}/></div>
    )
  }

export default Filter
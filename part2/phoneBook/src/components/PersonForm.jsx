const PersonForm = ({ addName, newName, newNumber, handleNameChange, handleNumberChange }) => {
    return(
        <div>
            <form onSubmit={addName}>
                <div>
                    Name: <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                    Number: <input value={newNumber} onChange={handleNumberChange}/>
                </div>
                 <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm
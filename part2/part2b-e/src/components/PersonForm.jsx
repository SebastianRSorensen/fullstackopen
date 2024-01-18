const PersonForm = ({ newNumber, newName, handleNewName, handleNewNumber, handleSubmit}) => {

    return (
        <form>
            <div>name: <input value={newName} onChange={handleNewName} /> </div>
            <div>number: <input value={newNumber} onChange={handleNewNumber} /></div>
            <div>
                <button type="submit" onClick={handleSubmit}>add</button>
            </div>
        </form>
    )
}

export default PersonForm
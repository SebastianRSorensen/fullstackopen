import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        {
            name: 'Arto Hellas',
            number: '040-1234567'
        }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber
        }
        if (persons.find((person) => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)
            return
        }
        setPersons(persons.concat(personObject))

        setNewName('')
        setNewNumber('')
    }

    const handleNewName = (event) => {
        console.log(event.target.value);
        setNewName(event.target.value)
    }

    const handleNewNumber = (event) => {
        console.log(event.target.value);
        setNewNumber(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <div>debug: {newName}</div>
            <div>debug nr: {newNumber}</div>
            <form>
                <div>name: <input value={newName} onChange={handleNewName} /> </div>
                <div>number: <input value={newNumber} onChange={handleNewNumber} /></div>
                <div>
                    <button type="submit" onClick={handleSubmit}>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map((person) => (
                <p key={person.name}>{person.name} {person.number}</p>
            ))}
        </div>
    )
}

export default App
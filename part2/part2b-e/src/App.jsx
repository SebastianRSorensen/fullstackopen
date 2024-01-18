import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
    const [persons, setPersons] = useState([
    ])

    useEffect(() => {
        console.log('effect')
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                console.log('promise fulfilled')
                setPersons(response.data)
            })
    }, [])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filterName, setFilter] = useState('')

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
        console.log(personObject);

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

    const handleNewFilter = (event) => {
        console.log(event.target.value);
        setFilter(event.target.value)
    }
    const personsToShow = filterName.length <= 0
        ? persons
        : persons.filter((person) => person.name.toLowerCase().includes(filterName.toLowerCase()))


    return (
        <div>
            <h2>Phonebook</h2>
            <div>debug: {newName}</div>
            <div>debug nr: {newNumber}</div>
            <Filter handleNewFilter={handleNewFilter} />
            <h3>Add a new</h3>
            <PersonForm newName={newName} newNumber={newNumber} handleNewName={handleNewName} handleNewNumber={handleNewNumber} handleSubmit={handleSubmit} />
            <h3>Numbers</h3>
            <Persons personsToShow={personsToShow} />
        </div>
    )
}

export default App
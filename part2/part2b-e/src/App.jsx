import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
    const [persons, setPersons] = useState([
    ])

    useEffect(() => {
        personService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
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
        const foundPerson = persons.find((person) => person.name === newName)
        if (foundPerson) {
            if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
                personService.update(foundPerson.id, personObject)
                    .then(updatedPerson => {
                        setPersons(persons.map(person => person.id !== foundPerson.id ? person : updatedPerson))
                        setNewName('')
                        setNewNumber('')
                    })
            }
            return
        }
        personService
            .create(personObject)
            .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
                setNewName('')
                setNewNumber('')
            })
        console.log(personObject);
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
            <Persons personsToShow={personsToShow} setPersons={setPersons} />
        </div>
    )
}

export default App
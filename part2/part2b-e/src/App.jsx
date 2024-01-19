import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'

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
    const [notificationMessage, setNotificationMessage] = useState({
        message: "initial message",
        error: false
    })

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
                        handleNotification(`Updated ${updatedPerson.name}`, false)
                    })
                    .catch(error => {handleNotification(`UPDATING... The person '${foundPerson.name}' has already been  deleted from server`, true)})
            }
            return
        }
        personService
            .create(personObject)
            .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
                setNewName('')
                setNewNumber('')
                handleNotification(`Added ${returnedPerson.name}`, false)
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

    const handleNotification = (message, bool) => {
        console.log(message, bool)
        setNotificationMessage({ message: message, error: bool })
        console.log("NOTMSG: ", notificationMessage)
        setTimeout(() => {
            setNotificationMessage({
                message: null,
                error: false
            }
            )
        }, 5000)
        console.log("NOTMSG: ", notificationMessage)
    }

    const handleDelete = (person) => {
        if (window.confirm(`Delete ${person.name}?`)) {
            personService.deletePerson(person.id)
                .catch(error => { handleNotification((`The person '${person.name}' was already deleted from server`), true) })
            setPersons(personsToShow.filter(p => p.id !== person.id))
        }
    }



    const personsToShow = filterName.length <= 0
        ? persons
        : persons.filter((person) => person.name.toLowerCase().includes(filterName.toLowerCase()))



    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={notificationMessage.message} error={notificationMessage.error} />
            <div>debug: {newName}</div>
            <div>debug nr: {newNumber}</div>
            <Filter handleNewFilter={handleNewFilter} />
            <h3>Add a new</h3>
            <PersonForm newName={newName} newNumber={newNumber} handleNewName={handleNewName} handleNewNumber={handleNewNumber} handleSubmit={handleSubmit} />
            <h3>Numbers</h3>
            <Persons personsToShow={personsToShow} handleDelete={handleDelete} />
        </div>
    )
}

export default App
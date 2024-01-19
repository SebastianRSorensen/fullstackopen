import personService from '../services/persons'

const Persons = ({ personsToShow, setPersons }) => {

    const handleDelete = (person) => {
        if (window.confirm(`Delete ${person.name}?`)) {
            personService.deletePerson(person.id)
            setPersons(personsToShow.filter(p => p.id !== person.id))
        }
    }

    return (
        <div>
            {personsToShow.map((person) => (
                <p key={person.name}>{person.name} {person.number}
                    <button onClick={() => handleDelete(person)}>delete</button>
                </p>
            ))}
        </div>)
}

export default Persons
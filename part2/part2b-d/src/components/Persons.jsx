import personService from '../services/persons'

const Persons = ({ personsToShow, handleDelete }) => {

    const errorStyle = {
        color: 'red',
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
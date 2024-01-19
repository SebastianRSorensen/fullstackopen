
const Countries = ({ countriesToShow }) => {

 

    return (
        <div>
            {countriesToShow.map((country, index) => (
                <p key={country.name+ index}>{country.name.common}
                </p>
            ))}
        </div>)
}

export default Countries
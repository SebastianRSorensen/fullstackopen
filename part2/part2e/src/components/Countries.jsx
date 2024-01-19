
const Countries = ({ countriesToShow }) => {

    const size = countriesToShow.length

    return (
        <div>
            {size > 10
                ? "Too many matches, specify another filter"
                : countriesToShow.map((country, index) => (
                    <p key={country.name + index}>
                        {country.name.common}
                    </p>
                ))}
        </div>)
}

export default Countries

import Country from './Country'

const Countries = ({ countriesToShow, onShowCountry}) => {

    const size = countriesToShow.length
    console.log(size)

    return (
        <div>
            {countriesToShow.length === 1
                ? <Country country={countriesToShow} />
                : (size > 10
                    ? "Too many matches, specify another filter"
                    : countriesToShow.map((country, index) => (
                        <p key={country.name + index}>
                            {country.name.common}
                            <button onClick={() => onShowCountry(country.name.common)}>show</button>
                        </p>)
                    )
                )
            }
        </div>)
}

export default Countries
const Country = (country) => {
    const currentCountry = country.country[0]
    return (
        <div>
            <h1>{currentCountry.name.common}</h1>
            <p>capital {currentCountry.capital[0]}</p>
            <p>area {currentCountry.area}</p>
            <b>languages:</b>
            <ul>
                {Object.values(currentCountry.languages).map((language, index) =>
                    <li key={language + index}>{language}</li>)}
            </ul>
            <img src={currentCountry.flags.png} alt="flag" width="200" height="200"></img>
        </div>
    )
}

export default Country
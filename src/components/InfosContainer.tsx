export default function InfosContainer({ infos }: { infos: any }) {

    return (
        <div className="infosContainer">
            <h4>{infos.name.official}</h4>
            <div className="flags">
                <p>Flag</p>
                <p>Coat of arms</p>
            </div>
            <div className="images">
                <img src={infos.flags.png} alt="flag" />
                <img src={infos.coatOfArms.png} alt="" />
            </div>
            <ul>
                <li>Capital : {infos.capital ? infos.capital.map((capital: any) => capital) : "No"}</li>
                <li>Population : {infos.population}</li>
                <li>Area : {infos.area} square km</li>
                <li>Driving side : {infos.car.side}</li>
                <li>Currencies : {infos.currencies ? Object.values(infos.currencies).map((currency: any) => currency.name) : "No"}</li>
                <li>Languages : {infos.languages ? <ol>{Object.values(infos.languages).map((language: any) => <li>{language}</li>)}</ol> : "No"}</li>
                <li>Region : {infos.region}</li>
                <li>Start of the week : {infos.startOfWeek}</li>
                <li>UN member : {infos.unMember ? "Yes" : "No"}</li>
                <li>Postal code format : {infos.postalCode ? infos.postalCode.format : "No"}</li>
                <li>Independant : {infos.independent ? "Yes" : "No"}</li>
            </ul>
        </div>
    );
}
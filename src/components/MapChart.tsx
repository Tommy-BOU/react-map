import { ComposableMap, Geographies, Geography } from "react-simple-maps"

const geoUrl =
  "/react-map/custom.geo.json"

export default function MapChart({ datas }: {datas: Array<any>}  ) {

    function ApplyContinentColor( country:any ) {
      let countryData = datas.find((data) => data.cca2 === country.properties.wb_a2);
        countryData === undefined ? countryData = datas.find((data) => data.cca3 === country.properties.iso_a3) : countryData;
        countryData === undefined ? countryData = datas.find((data) => data.cca3 === country.properties.iso_a3_eh) : countryData;
      if (countryData !== undefined){
        if(countryData.continents.includes("Asia")){
            return "green"
        }
        else if (countryData.continents.includes("Europe")){
            return "Blue"
        }
        else if (countryData.continents.includes("North America")){
            return "red"
        }
        else if (countryData.continents.includes("South America")){
            return "yellow"
        }
        else if (countryData.continents.includes("Africa")){
            return "purple"
        }
        else if (countryData.continents.includes("Oceania")){
            return "orange"
        }
        else if (countryData.continents.includes("Antarctica")){
            return "grey"
        }
      }
      else{
        return;
      }
    }

  return (
    <ComposableMap style={{width:"100%", backgroundColor:"skyblue"}}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} id={geo.rsmKey}
            fill={ApplyContinentColor(geo)}
            style={{
                    default: { outline: "none", stroke:"darkgrey", },
                    hover: { outline: "none", stroke: "grey" },
                    pressed: { outline: "none" },}} />
          ))
        }
      </Geographies>
    </ComposableMap>
  )
}

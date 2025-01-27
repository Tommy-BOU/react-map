import { ComposableMap, Geographies, Geography } from "react-simple-maps"

const geoUrl =
  "public/custom.geo.json"

export default function MapChart({ datas }: {datas: Array<any>}  ) {

    function ApplyContinentColor(country2: string, country3: string) {
      let countryData = datas.find((data) => data.cca2 === country2);
        countryData === undefined ? countryData = datas.find((data) => data.cca3 === country3) : countryData;
      if (countryData !== undefined){
        if(countryData.continents.includes("Europe")){
            return "blue"
        }
        else if (countryData.continents.includes("Asia")){
            return "green"
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
            <Geography key={geo.rsmKey} geography={geo} id={geo.rsmKey} title={geo.properties.name}
            fill={ApplyContinentColor(geo.properties.wb_a2, geo.properties.wb_a3)}
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

import { ComposableMap, Geographies, Geography } from "react-simple-maps"

const geoUrl =
  "public/countries-110m.json"

export default function MapChart({ datas }: {datas: Array<any>}  ) {

    // datas.map(data => console.log(data));

  return (
    <ComposableMap style={{width:"100%", backgroundColor:"skyblue"}}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} style={{
                    default: { outline: "black", stroke:"grey", },
                    hover: { outline: "none", stroke: "black" },
                    pressed: { outline: "none" },}} />
          ))
        }
      </Geographies>
    </ComposableMap>
  )
}

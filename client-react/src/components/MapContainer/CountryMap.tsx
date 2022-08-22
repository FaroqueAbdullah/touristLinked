import React from "react"
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps"

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

export const CountryMap = () => {

  return (
    <ComposableMap className="w-100" data-tip="" projectionConfig={{ scale: 180 }} width={800} height={470}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => {
        const { name, POP_EST } = geo.properties;
        //  console.log(`${name} — ${POP_EST}`)
        return(

        <Geography
              key={name}
              geography={geo}
              style={{
                default: {
                  fill: name === "India" ? "#006400" : "#000",
                  outline: "#000"
                },
                hover: {
                  fill: "#000",
                  outline: "none"
                },
                pressed: {
                  fill: "#000",
                  outline: "none"
                }
              }}
            />
          )
      })
        }
      </Geographies>
  </ComposableMap>
  )
}

export default CountryMap;
import { useState, useEffect } from "react";
import MapChart from "./components/MapChart";
import ErrorMessage from "./components/ErrorMessage";
import Header from "./components/header";
import Footer from "./components/footer";
import { CircleLoader } from "react-spinners";
import "./App.css";
import InfosContainer from "./components/InfosContainer";

function App() {
  const [datas, setDatas] = useState<any>({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<any>({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/all?fields=name,flags,capital,cca2,cca3,population,flags,currencies,languages,area,continents`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setDatas(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError("Error fetching data");
    }
  };

  function CountrySelector(country: any) {
    let countryInfos = datas.find(
      (data: any) => data.cca2 === country.properties.wb_a2
    );
    countryInfos === undefined
      ? (countryInfos = datas.find(
          (data: any) => data.cca3 === country.properties.iso_a3
        ))
      : countryInfos;
    countryInfos === undefined
      ? (countryInfos = datas.find(
          (data: any) => data.cca3 === country.properties.iso_a3_eh
        ))
      : countryInfos;
    setSelectedCountry(countryInfos);
    console.log(selectedCountry);
  }

  return (
    <>
      <Header />
      <div className="content">
        {error.length > 0 && <ErrorMessage message={error} />}
        {loading === true ? (
          <CircleLoader color="#36d7b7" />
        ) : (
          <div className="mapContainer">
            <MapChart datas={datas} callBack={CountrySelector} />
          </div>
        )}
        {Object.keys(selectedCountry).length > 0 && (
          <InfosContainer infos={selectedCountry} />
        )}
      </div>

      <Footer />
    </>
  );
}

export default App;

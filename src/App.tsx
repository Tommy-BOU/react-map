import { useState, useEffect } from "react";
import MapChart from "/react-map/components/MapChart";
import ErrorMessage from "/react-map/components/ErrorMessage";
import Header from "/react-map/components/header";
import Footer from "/react-map/components/footer";
import { CircleLoader } from "react-spinners";
import "/react-map/App.css";

function App() {
  const [datas, setDatas] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://restcountries.com/v3.1/all`);
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

  return (
    <>
      <Header />
      <div className="content">
        {error.length > 0 && <ErrorMessage message={error} />}
        {loading === true ? <CircleLoader color="#36d7b7" /> : <MapChart datas={datas} />}
      </div>

      <Footer />
    </>
  );
}

export default App;

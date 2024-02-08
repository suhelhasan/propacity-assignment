import { useEffect, useState } from "react";
import Axios from "axios";
import Filters from "./Components/Filters";
import FlightList from "./Components/List";
import styling from "./index.module.scss";

const App = () => {
  const [flights, setFlights] = useState([]);
  const [defaultFLightData, setDefaultFLightData] = useState([]);
  const [airlineFilters, setAirlineFilters] = useState("");

  useEffect(() => {
    Axios.get("https://api.npoint.io/4829d4ab0e96bfab50e7")
      .then((response) => {
        if (response.data.message === "Success") {
          setFlights(response.data.data.result);
          setDefaultFLightData(response.data.data.result);
          if (response.data.data.result) {
            let arr = ["All"];
            response.data.data.result.forEach((each) => {
              if (!arr.includes(each.displayData?.airlines[0]?.airlineName)) {
                arr.push(each.displayData?.airlines[0]?.airlineName);
              }
            });
            setAirlineFilters(arr);
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching flights:", error);
      });
  }, []);

  return (
    <div className={styling["JetSetGo"]}>
      {flights.length ? (
        <div className={styling["container"]}>
          <h1 className={styling["header"]}>JetSetGo</h1>
          <Filters
            defaultFLightData={defaultFLightData}
            setFlights={setFlights}
            airlineFilters={airlineFilters}
          />
          <FlightList flights={flights} />
        </div>
      ) : (
        <h1> Loading...</h1>
      )}
    </div>
  );
};

export default App;

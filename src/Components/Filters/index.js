import { useEffect, useState } from "react";
import styling from "./styling.module.scss";

const SortOptions = ({ defaultFLightData, setFlights, airlineFilters }) => {
	const [airline, setAirline] = useState("All");
	const [priceFilter, setPriceFilter] = useState("default");

	useEffect(() => {
		let final = [...defaultFLightData];
		if (priceFilter === "lowToHigh") {
			final = [...defaultFLightData].sort((a, b) => {
				return a.fare - b.fare;
			});
		} else if (priceFilter === "highToLow") {
			final = [...defaultFLightData].sort((a, b) => {
				return b.fare - a.fare;
			});
		}

		if (airline !== "All") {
			final = final.filter(
				(each) => each.displayData?.airlines[0]?.airlineName === airline && each
			);
		}

		setFlights([...final]);
	}, [priceFilter, airline]);

	return (
		<div className={styling["filters"]}>
			<div className={styling["container"]}>
				Filter Airline:
				<select onChange={(e) => setAirline(e.target.value)}>
					{airlineFilters.length &&
						airlineFilters?.map((each) => {
							return (
								<option key={each} value={each}>
									{each}
								</option>
							);
						})}
				</select>
			</div>
			<div className={styling["container"]}>
				Sort by Price:
				<select onChange={(e) => setPriceFilter(e.target.value)}>
					<option value="default">Default</option>
					<option value="lowToHigh">Low to High</option>
					<option value="highToLow">High to Low</option>
				</select>
			</div>
		</div>
	);
};

export default SortOptions;

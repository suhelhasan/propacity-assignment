import styling from "./styling.module.scss";
import moment from "moment";

const FlightList = ({ flights }) => {
	return (
		<div className={styling["listData"]}>
			{flights.map((flight) => (
				<div className={styling["list"]} key={flight.id}>
					<div className={styling["firstSection"]}>
						<div className={styling["image"]}>
							{flight.displayData.airlines[0].airlineCode}
						</div>
						<div className={styling["name"]}>
							{flight.displayData.airlines[0].airlineName}
						</div>
					</div>
					<div className={styling["secondSection"]}>
						<div className={styling["timeAndCity"]}>
							<div className={styling["time"]}>
								{moment(flight.displayData.source.depTime).format("hh:mm")}
							</div>
							<div className={styling["date"]}>
								{moment(flight.displayData.source.depTime).format("DD MMM YYYY")}
							</div>
							<div className={styling["place"]}>
								{flight.displayData.source.airport.cityName},
								<span className={styling["terminal"]}>
									{"Terminal " + flight.displayData.source.airport.terminal}
								</span>
							</div>
						</div>

						<div className={styling["timeAndStop"]}>
							<div className={styling["time"]}>
								{flight.displayData.totalDuration}
							</div>
							<div className={styling["line"]}></div>
							<div className={styling["stop"]}>{flight.displayData.stopInfo}</div>
						</div>

						<div className={styling["destination"]}>
							<div className={styling["time"]}>
								{moment(flight.displayData.source.arrTime).format("hh:mm")}
							</div>
							<div className={styling["date"]}>
								{moment(flight.displayData.source.arrTime).format("DD MMM YYYY")}
							</div>
							<div className={styling["place"]}>
								{flight.displayData.destination.airport.cityName},
								<span className={styling["terminal"]}>
									{"Terminal " + flight.displayData.destination.airport.terminal}
								</span>
							</div>
						</div>
					</div>

					<div className={styling["thirdSection"]}>
						₹{flight.fare}
						<button>Book Now</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default FlightList;

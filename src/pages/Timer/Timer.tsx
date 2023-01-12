import React, { useEffect, useState } from "react";
import { useCountdown } from "./CountDown";
import ShowCounter from "./ShowCounter";
import TimeExpired from "./TimeExpired";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

const Timer = () => {
	const [defaultTimeValue, setDefaultTimeValue] = useState(5000);
	const [targetTime, setTargetTime] = useState(3000);
	const [start, setStart] = useState(false);
	const [days, hours, minutes, seconds] = useCountdown(
		targetTime,
		setTargetTime,
		start,
	);

	useEffect(() => {
		if (checkIfTimeIsOver()) {
			setStart(false);
		}
	}, [targetTime]);

	const checkIfTimeIsOver = () => days + hours + minutes + seconds <= 0;

	const handleStart = () => {
		if (targetTime <= 0) {
			setTargetTime(defaultTimeValue);
			setStart(true);
		} else setStart(!start);
	};
	return (
		<>
			{checkIfTimeIsOver() && <TimeExpired />}

			<ShowCounter
				days={days}
				hours={hours}
				minutes={minutes}
				seconds={seconds}
			/>

			<Container fixed sx={{ margin: "0 auto", textAlign: "center" }}>
				{!start || checkIfTimeIsOver() ? (
					<Button
						variant="contained"
						size="large"
						color="success"
						onClick={handleStart}
					>
						Start
					</Button>
				) : (
					<Button
						variant="contained"
						size="large"
						color="error"
						onClick={handleStart}
					>
						Pause
					</Button>
				)}
			</Container>
		</>
	);
};

export default Timer;

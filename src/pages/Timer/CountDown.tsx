import { useEffect } from "react";
const useCountdown = (
	targetTime: number,
	setTargetTime: any,
	start: boolean,
) => {
	useEffect(() => {
		const interval = setInterval(() => {
			console.log("Proba");
			console.log("Start", start);
			if (start) setTargetTime(targetTime - 1000);
		}, 1000);

		return () => clearInterval(interval);
	}, [targetTime, start]);

	return getReturnValues(targetTime);
};

const getReturnValues = (countDown: number) => {
	// calculate time left
	const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
	);
	const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

	return [days, hours, minutes, seconds];
};

export { useCountdown };

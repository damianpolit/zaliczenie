import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";

const DateTimeDisplay = ({ value, type, isDanger }: any) => {
	const fixTimeDisplay = (value: number) => (value < 10 ? `0${value}` : value);

	return (
		<TimeBlock>
			<Timer>{fixTimeDisplay(value)}</Timer>
			<Type>{type}</Type>
		</TimeBlock>
	);
};

const TimeBlock = styled(Box)`
	border: 2px solid white;
	flex: 1;
	text-align: center;
`;

const Timer = styled.p`
	font-weight: 700;
	font-size: 4em;
`;

const Type = styled.div`
	text-transform: uppercase;
	font-weight: 400;
	font-size: 1.6em;
`;

export default DateTimeDisplay;

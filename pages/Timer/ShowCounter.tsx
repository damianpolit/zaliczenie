import DateTimeDisplay from "../../components/DateTimeDisplay/DateTimeDisplay";
import styled from "styled-components";

const ShowCounter = ({
	days,
	hours,
	minutes,
	seconds,
}: {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}) => {
	return (
		<Counter>
			<DateTimeDisplay value={days} type={"Dni"} isDanger={days <= 3} />
			<DateTimeDisplay value={hours} type={"Godzin"} isDanger={false} />
			<DateTimeDisplay value={minutes} type={"Minut"} isDanger={false} />
			<DateTimeDisplay value={seconds} type={"Sekund"} isDanger={false} />
		</Counter>
	);
};

const Counter = styled.div`
	padding: 10px;
	display: flex;
	width: 80%;
	margin: 0 auto;
`;

export default ShowCounter;

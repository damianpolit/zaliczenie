import HeaderText from "../../components/Header/Header";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CalculateIcon from "@mui/icons-material/Calculate";
import styled from "styled-components";
import { useState } from "react";
import Box from "@mui/material/Box";

const Bmi = () => {
	const [height, setHeight] = useState<string>();
	const [weight, setWeight] = useState<string>();
	const [info, setInfo] = useState<string>();
	const [bmi, setBmi] = useState<number>();

	const handleBmi = () => {
		if (!height || isNaN(+height) || !weight ||  isNaN(+weight) || +height <= 0 || +weight <= 0) return;
		let val = Number(
			((Number(weight) / Number(height) / Number(height)) * 10000).toFixed(1),
		);
		setBmi(val);
		if (val < 18.5) {
			setInfo("Niedowaga.");
		} else if (val > 18.5 && val <= 24.9) {
			setInfo("Twoje BMI jest w normie.");
		} else if (val > 24.9 && val < 30) {
			setInfo("Nadwaga. Czas na rower :)");
		} else {
			setInfo("Otylość! Udaj się do dietetyka");
		}
	};

	return (
		<>
			<HeaderText>Kalkulator bmi</HeaderText>
			<Container
				component="main"
				maxWidth="xs"
				sx={{
					background: "white",
					padding: "1rem",
					minHeight: "30vh",
					color: "black",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignContent: "center",
				}}
			>
				<FormControl sx={{
					justifyContent: "center",
					alignContent: "center",
				}}>
					<TextFiledStyle
						id="outlined-basic"
						label="Wzrost"
						variant="outlined"
						onChange={(e) => setHeight(e.target.value)}
					/>
					<TextFiledStyle
						id="outlined-basic"
						label="Waga"
						variant="outlined"
						onChange={(e) => setWeight(e.target.value)}
					/>

					<Button
						onClick={handleBmi}
						fullWidth
						variant="contained"
						endIcon={<CalculateIcon />}
					>
						Oblicz
					</Button>
				</FormControl>

				<InfoContainer>{info}</InfoContainer>
			</Container>
		</>
	);
};

const TextFiledStyle = styled(TextField)`
	margin: 10px !important;
	width: 100% !important;
`;

const InfoContainer = styled(Box)`
	display: flex;
	padding: 1rem;
	text-align: center;
	justify-content: center;
	font-weight: bold;
`

export default Bmi;

import HeaderText from "../../components/Header/Header";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import CalculateIcon from "@mui/icons-material/Calculate";
import {useRef, useState} from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";


const Przewalutowanie = () => {

    interface IExchange {
        id: number,
        name: string,
        val: number
    }

    const exchanges: IExchange[] = [
        {
            id: 1,
            name: "EUR",
            val: 4.68
        },
        {
            id: 2,
            name: "GBR",
            val: 5.30
        },
        {
            id: 3,
            name: "USD",
            val: 4.35
        }
      ]

    const [value, setValue] = useState<string>();
    const [exchange, setExchange] = useState<string>(exchanges[0].name);
    const [result, setResult] = useState<string>()
    const exchangeRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: any) => {
        setExchange(e.target.value);
    }

    const handleExchange = () => {
        if (!value || isNaN(+value) || +value<=0) return;

        const exchangeObject = exchanges.filter((ex) => ex.name === exchange)[0]

        const res = +value/exchangeObject.val;
        setResult(`${value} zl to 
        ${parseFloat(String(res)).toFixed(2)}
        ${exchangeObject.name}`)

    }
    return (
        <>
            <HeaderText>Kantor</HeaderText>
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
                        label="Zlotowki"
                        variant="outlined"
                        onChange={(e) => setValue(e.target.value)}
                    />

                    <StyledSelect
                        value={exchanges[0].name} onChange={handleChange}>
                        {exchanges.map((record) => (
                            <option value={record.name}>{record.name}</option>
                        ))}
                    </StyledSelect>

                    <Button
                        onClick={handleExchange}
                        fullWidth
                        variant="contained"
                        endIcon={<CalculateIcon />}
                    >
                        Przelicz
                    </Button>
                </FormControl>

                <InfoContainer>{result}</InfoContainer>
            </Container>
        </>
    );
}

const StyledSelect = styled.select`
  padding: 1rem;
  margin: 0.2rem;
`

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

export default Przewalutowanie
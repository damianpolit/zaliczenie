import styled from "styled-components";

const HeaderText = (props: any) => {
	return (
		<>
			<HeaderTextStyle>{props.children}</HeaderTextStyle>
		</>
	);
};

const HeaderTextStyle = styled.h1`
	text-align: center;
	font-weight: 600;
	text-transform: uppercase;
`;

export default HeaderText;

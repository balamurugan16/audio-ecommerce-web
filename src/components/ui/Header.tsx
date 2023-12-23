import styled from "styled-components";

const Header = styled.header`
	display: grid;
	grid-template-columns: 30px 1fr 30px;
	align-items: center;
	font-size: 1.6rem;
	line-height: 2;
	width: 100%;
	:nth-child(1) {
		justify-self: start;
	}
	:nth-child(2) {
		justify-self: center;
	}
	:nth-child(3) {
		justify-self: end;
	}
`;

export default Header;

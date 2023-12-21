import styled from "styled-components";
import FeatherIcon from "./FeatherIcon";

export default function Title() {
	return (
		<StyledTitle>
			<FeatherIcon icon="chevron-left" />
			<h1>Search</h1>
			<FeatherIcon icon="shopping-cart" />
		</StyledTitle>
	);
}

const StyledTitle = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 3rem;
`;

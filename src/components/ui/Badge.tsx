import styled from "styled-components";

type Props = {
	title: string;
	filled?: boolean;
};

function Badge({ title, filled = false }: Props) {
	return <StyledBadge $filled={filled}>{title}</StyledBadge>;
}

const StyledBadge = styled.span<{ $filled?: boolean }>`
	padding: 0.5rem;
	border-radius: 30px;
	background-color: ${(props) =>
		props.$filled ? "var(--color-primary)" : "transparent"};
	color: ${(props) =>
		props.$filled ? "var(--color-white)" : "var(--color-grey-dark-1)"};
`;

export default Badge;

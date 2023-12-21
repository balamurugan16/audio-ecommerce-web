import { PropsWithChildren } from "react";
import styled from "styled-components";
import FeatherIcon, { Props as FeatherIconProps } from "./FeatherIcon";

type Props = {
	icon?: FeatherIconProps["icon"];
} & PropsWithChildren;

export default function Button(props: Props) {
	return (
		<StyledButton>
			{props.children}
			{props.icon ? <FeatherIcon icon={props.icon} /> : null}
		</StyledButton>
	);
}

const StyledButton = styled.button`
	background-color: var(--color-primary);
	color: var(--color-white);
	min-width: 15rem;
	border: none;
	border-radius: 10px;
	padding: 1rem 2rem;
	font-weight: bolder;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

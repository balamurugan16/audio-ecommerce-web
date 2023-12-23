import { PropsWithChildren } from "react";
import styled from "styled-components";
import FeatherIcon, { Props as FeatherIconProps } from "./FeatherIcon";

type Props = {
	icon?: FeatherIconProps["icon"];
	variant?: keyof typeof variants;
} & PropsWithChildren;

const variants = {
	filled: "var(--color-primary)",
	default: "transparent",
};

export default function Button({ children, icon, variant = "default" }: Props) {
	return (
		<StyledButton className={variant} $hasIcon={!!icon}>
			{children}
			{icon ? <FeatherIcon icon={icon} /> : null}
		</StyledButton>
	);
}

const StyledButton = styled.button<{ $hasIcon: boolean }>`
	border: none;
	border-radius: 10px;
	padding: 1rem 2rem;
	font-weight: bolder;
	display: flex;
	justify-content: ${(props) => (props.$hasIcon ? "space-between" : "center")};
	align-items: center;

	&.filled {
		background-color: var(--color-primary);
		color: var(--color-white);
	}
	&.default {
		background-color: transparent;
		color: var(--color-primary);
	}
`;

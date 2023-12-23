import styled from "styled-components";
import FeatherIcon from "./FeatherIcon";
import { ComponentProps } from "react";
import { FeatherIconNames } from "feather-icons";

type Props = {
	icon?: FeatherIconNames;
} & ComponentProps<"input">;

function Input({ value, icon, onChange, placeholder, ...props }: Props) {
	return (
		<Wrapper $icon={!!icon}>
			{icon ? (
				<FeatherIcon icon={icon} fill="var(--color-grey-dark-1)" />
			) : null}
			<input
				{...props}
				type="text"
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</Wrapper>
	);
}

const Wrapper = styled.div<{ $icon: boolean }>`
	position: relative;

	input {
		border: 2px solid var(--color-grey);
		padding: 1rem;
		padding-left: ${(props) => (props.$icon ? "4rem" : "1rem")};
		border-radius: 5px;
		position: relative;
		color: var(--color-grey);
		width: 100%;
		box-sizing: border-box;

		&:focus {
			border: 2px solid var(--color-default);
			color: var(--color-default);
		}
	}

	svg {
		position: absolute;
		width: 2rem;
		padding: 0.8rem;
		z-index: 1;
	}
`;

export default Input;

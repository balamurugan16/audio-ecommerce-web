import styled from "styled-components";
import FeatherIcon, { type FeatherIcons } from "./FeatherIcon";
import { ChangeEventHandler } from "react";

type Props = {
	value?: string;
	placeholder?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	icon?: FeatherIcons;
};

function Input({ value, icon, onChange, placeholder }: Props) {
	return (
		<Wrapper $icon={!!icon}>
			{icon ? (
				<FeatherIcon icon={icon} fill="var(--color-grey-dark-1)" />
			) : null}
			<input
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
		border: 2px solid var(--color-grey-dark-1);
		padding: 1rem;
		padding-left: ${(props) => (props.$icon ? "4rem" : "1rem")};
		border-radius: 5px;
		position: relative;
		color: var(--color-grey-dark-1);

		&:focus {
			border: 2px solid var(--color-default);
			color: var(--color-default);
		}
	}

	svg {
		position: absolute;
		width: 2rem;
		padding: 1rem;
		z-index: 1;
	}
`;

export default Input;

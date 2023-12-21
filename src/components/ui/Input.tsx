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

const Wrapper = styled.span<{ $icon: boolean }>`
	input {
		border: 2px solid var(--color-grey-dark-1);
		padding: 1rem;
		padding-left: ${(props) => (props.$icon ? "4rem" : "1rem")};
		margin: 1rem 0;
		border-radius: 5px;
		position: relative;
		color: var(--color-grey-dark-1);

		&:focus {
			border: 2px solid var(--color-default);
			color: var(--color-default);
		}
	}

	i {
		position: absolute;
		top: 0.6rem;
		padding: 1rem;
		z-index: 1;
	}
`;

export default Input;

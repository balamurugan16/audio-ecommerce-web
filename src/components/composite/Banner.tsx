import styled from "styled-components";
import Button from "../ui/Button";

type Props = {
	title: string;
	img: string;
};

function Banner({ title, img }: Props) {
	return (
		<Wrapper>
			<div>
				<h2>{title}</h2>
				<Button icon="arrow-right">Shop now</Button>
			</div>
			<img src={img} alt={title} />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	background-color: var(--color-white);
	display: flex;
	max-width: 30rem;
	gap: 1rem;
	padding: 2.4rem 2rem;
	border-radius: 1rem;

	div {
		display: flex;
		flex-direction: column;
		h2 {
			font-size: 2.5rem;
			width: 50%;
			font-family: var(--font-secondary);
			line-height: 1.5;
			font-weight: 800;
		}
		button {
			font-size: 1.5rem;
			font-weight: bold;
			letter-spacing: 0.2px;
			padding: 0;
		}
	}
	img {
		object-fit: contain;
	}
`;

export default Banner;

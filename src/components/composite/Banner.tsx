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
			<img src={img} alt={title} width={130} />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	background-color: var(--color-white);
	display: flex;
	width: 100%;
	gap: 1rem;
	padding: 2rem;
	border-radius: 1rem;

	div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		h2 {
			font-size: 1.8rem;
			width: 50%;
			font-family: var(--font-secondary);
			line-height: 1.5;
			font-weight: 700;
		}
		button {
			font-size: 1.2rem;
			font-weight: bold;

			padding: 0;
		}
	}
	img {
		object-fit: contain;
	}
`;

export default Banner;

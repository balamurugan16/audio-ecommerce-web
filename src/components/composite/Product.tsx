import styled from "styled-components";
import FeatherIcon from "../ui/FeatherIcon";
import Star from "../ui/Star";

type Orientation = "row" | "column";

type Props = {
	title: string;
	img: string;
	rating: number;
	reviewCount: number;
	price: string;
	orientation: Orientation;
	showStats?: boolean;
};

function Product({
	img,
	title,
	rating,
	reviewCount,
	price,
	orientation,
	showStats = false,
}: Props) {
	return (
		<Wrapper $orientation={orientation}>
			<img src={img} alt={title} />
			<div className="content">
				<h2 className="title">{title}</h2>
				<h4 className="price">{price}</h4>
				{showStats ? (
					<div className="footer">
						<span className="rating">
							<Star filled />
							{rating}
						</span>
						<p>{reviewCount} Reviews</p>
						<FeatherIcon icon="more-vertical" fill="var(--color-grey-dark-1)" />
					</div>
				) : null}
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div<{ $orientation: Orientation }>`
	background-color: var(--color-white);
	border-radius: 1rem;
	display: flex;
	flex-direction: ${(props) => props.$orientation};
	max-width: ${(props) => (props.$orientation === "row" ? "30rem" : "15rem")};
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	padding: 1rem 1.5rem;
	.content {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.title {
		font-size: 1.4rem;
		font-weight: 400;
	}
	.price {
		font-weight: 700;
	}
	.footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.rating {
			display: flex;
			align-items: center;
			gap: 0.5rem;
		}
	}
`;

export default Product;

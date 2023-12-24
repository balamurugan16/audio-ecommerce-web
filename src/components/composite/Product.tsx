import styled from "styled-components";
import FeatherIcon from "../ui/FeatherIcon";
import Star from "../ui/Star";

type Orientation = "row" | "column";

type Props = {
	title: string;
	img: string;
	rating: number;
	reviewCount: number;
	price: number;
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
			<img className="product-image" src={img} alt={title} />
			<div className="content">
				<h2 className="title">{title}</h2>
				<h4 className="price">USD {price}</h4>
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
	min-width: ${(props) => (props.$orientation === "row" ? "30rem" : "11.5rem")};
	align-items: center;
	gap: 0.5rem;
	padding: 1rem 1.5rem;
	img.product-image {
		width: ${(props) => (props.$orientation === "row" ? "50px" : "96px")};
	}
	.content {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		width: 100%;
	}
	.title {
		font-size: 1.2rem;
		font-weight: 400;
	}
	.price {
		font-size: 1.2rem;
		font-weight: 700;
	}
	.footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 1.2rem;
		.rating {
			display: flex;
			align-items: center;
			gap: 0.5rem;
		}
	}
`;

export default Product;

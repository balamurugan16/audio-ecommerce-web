import styled from "styled-components";
import FeatherIcon from "../ui/FeatherIcon";
import Star from "../ui/Star";

type Props = {
	title: string;
	img: string;
	rating: number;
	reviewCount: number;
	price: string;
};

function FeaturedProduct({ img, title, rating, reviewCount, price }: Props) {
	return (
		<Wrapper>
			<img src={img} alt={title} />
			<h2 className="title">{title}</h2>
			<h4 className="price">{price}</h4>
			<div className="footer">
				<span className="rating">
					<Star filled />
					{rating}
				</span>
				<p>{reviewCount} Reviews</p>
				<FeatherIcon icon="more-vertical" fill="var(--color-grey-dark-1)" />
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	background-color: var(--color-white);
	border-radius: 1rem;
	max-width: 15rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 0.5rem;
	padding: 1rem 1.5rem;
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

export default FeaturedProduct;

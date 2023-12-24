import { ComponentProps } from "react";
import styled from "styled-components";
import Product from "./Product";

type Props = {
	title: string;
	products: ComponentProps<typeof Product>[];
};

function ProductShowcase({ title, products }: Props) {
	return (
		<FeaturedProducts>
			<div className="card-header">
				<p>{title}</p>
				<span>See all</span>
			</div>
			<div className="products">
				{products.map((product) => (
					<Product
						orientation="column"
						img={product.img}
						title={product.title}
						price={product.price}
						rating={product.rating}
						reviewCount={product.reviewCount}
					/>
				))}
			</div>
		</FeaturedProducts>
	);
}
const FeaturedProducts = styled.section`
	margin: 2rem 0;
	.card-header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 2rem;
		font-size: 1.4rem;
		p {
			font-size: 1.2rem;
		}
	}
	.products {
		display: flex;
		flex-direction: row;
		overflow-x: auto;
		gap: 1rem;
	}
`;

export default ProductShowcase;

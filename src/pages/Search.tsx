import styled from "styled-components";
import FeatherIcon from "../components/ui/FeatherIcon";
import Header from "../components/ui/Header";
import Input from "../components/ui/Input";
import headphones from "../assets/headphones.png";
import LastSearchItem from "../components/composite/LastSearchItem";
import Product from "../components/composite/Product";
import { ComponentProps } from "react";

const searches = ["TMA2 Wireless", "Cable"];

const products: ComponentProps<typeof Product>[] = [
	{
		orientation: "row",
		title: "TMA-2 Comfort Wireless",
		price: 270,
		rating: 4.6,
		reviewCount: 86,
		showStats: true,
		img: headphones,
	},
	{
		orientation: "row",
		title: "TMA-2 Comfort Wireless",
		price: 270,
		rating: 4.6,
		reviewCount: 86,
		showStats: true,
		img: headphones,
	},
	{
		orientation: "row",
		title: "TMA-2 Comfort Wireless",
		price: 270,
		rating: 4.6,
		reviewCount: 86,
		showStats: true,
		img: headphones,
	},
];

function Search() {
	return (
		<Wrapper>
			<Header>
				<FeatherIcon icon="chevron-left" />
				<h3>Search</h3>
				<FeatherIcon icon="shopping-cart" />
			</Header>
			<Input icon="search" placeholder="Search headphones" />
			<LatestSearch>
				<h6>Latest Search</h6>
				<div>
					{searches.map((search) => (
						<LastSearchItem title={search} />
					))}
				</div>
			</LatestSearch>
			<PopularProducts>
				<h3>Popular Product</h3>
				<div className="products">
					{products.map((product) => (
						<Product {...product} />
					))}
				</div>
			</PopularProducts>
		</Wrapper>
	);
}

const Wrapper = styled.main`
	padding: 2.5rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const LatestSearch = styled.section`
	h6 {
		font-size: 1.4rem;
		color: var(--color-grey-dark-1);
		font-weight: normal;
		margin-bottom: 1rem;
	}
`;

const PopularProducts = styled.section`
	h3 {
		font-size: 1.6rem;
		font-weight: normal;
		margin-bottom: 1rem;
	}
	div > div {
		margin-bottom: 0.5rem;
	}
`;
export default Search;

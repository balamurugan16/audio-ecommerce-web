import { ComponentProps } from "react";
import styled from "styled-components";
import headphones from "../assets/headphones.png";
import neckband from "../assets/neckband.png";
import CartItem from "../components/composite/CartItem";
import Button from "../components/ui/Button";
import FeatherIcon from "../components/ui/FeatherIcon";
import Header from "../components/ui/Header";

const cartItems: ComponentProps<typeof CartItem>[] = [
	{
		img: headphones,
		price: 270,
		quantity: 1,
		title: "TMA-2 Comfort Wireless",
	},
	{
		img: neckband,
		price: 25,
		quantity: 1,
		title: "CO2 - Cable",
	},
];

function ShoppingCart() {
	const totalItems = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
	const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);

	return (
		<Wrapper>
			<Header>
				<FeatherIcon icon="chevron-left" />
				<h3>Shopping Cart</h3>
				<FeatherIcon icon="trash-2" />
			</Header>
			<Cart>
				{cartItems.map((item) => (
					<CartItem {...item} />
				))}
			</Cart>
			<Footer>
				<div>
					<p>Total {totalItems} items</p>
					<h2>USD {totalPrice}</h2>
				</div>
				<Button variant="filled" icon="chevron-right">
					Proceed to Checkout
				</Button>
			</Footer>
		</Wrapper>
	);
}

const Wrapper = styled.main`
	padding: 2.5rem;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 5% 70% auto;
	gap: 2rem;
	height: 100vh;
`;

const Cart = styled.section`
	display: flex;
	flex-direction: column;
	gap: 2.5rem;
	overflow: auto;
`;

const Footer = styled.footer`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	div {
		display: flex;
		justify-content: space-between;
		p {
			font-size: 1.2rem;
			color: var(--color-grey-dark-1);
		}
	}
`;

export default ShoppingCart;

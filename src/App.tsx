import { useEffect, useState } from "react";
import image from "./assets/headphones.png";
import CartItem from "./components/composite/CartItem";

function App() {
	const [quantity, setQuantity] = useState(0);

	useEffect(() => {
		console.log(quantity);
	}, [quantity]);

	return (
		<div style={{ margin: "2rem 4rem" }}>
			<CartItem
				img={image}
				price="USD 350"
				quantity={quantity}
				title="TMA-2 HD Wireless"
				onChange={(q) => setQuantity(q)}
			/>
		</div>
	);
}

export default App;

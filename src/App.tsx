import image from "./assets/headphones.png";
import CartItem from "./components/composite/CartItem";

function App() {
	return (
		<div style={{ margin: "2rem 4rem" }}>
			<CartItem img={image} price="USD 350" title="TMA-2 HD Wireless" />
		</div>
	);
}

export default App;

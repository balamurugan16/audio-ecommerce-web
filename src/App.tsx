import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
	ExploreProducts,
	Home,
	ProductDetails,
	Profile,
	Search,
	ShoppingCart,
	Signin,
	Signup,
} from "./pages";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/signin" element={<Signin />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/" element={<Home />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/search" element={<Search />} />
				<Route path="/explore" element={<ExploreProducts />} />
				<Route path="/product" element={<ProductDetails />} />
				<Route path="/shopping-cart" element={<ShoppingCart />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

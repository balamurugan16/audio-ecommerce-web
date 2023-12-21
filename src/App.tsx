import { useState } from "react";
import Avatar from "./components/ui/Avatar";
import Button from "./components/ui/Button";
import Ratings from "./components/ui/Ratings";
import Title from "./components/composite/Title";
import Badge from "./components/ui/Badge";

function App() {
	const [stars, setStars] = useState(3);
	return (
		<>
			<Avatar size="small" />
			<Title />
			<Ratings stars={stars} onChange={setStars} />
			<Button icon="circle">Add To Cart</Button>
			<Badge title="Headphone" filled />
		</>
	);
}

export default App;

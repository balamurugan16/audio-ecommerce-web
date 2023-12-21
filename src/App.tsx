import Avatar from "./components/Avatar";
import Button from "./components/Button";
import Ratings from "./components/Ratings";
import Title from "./components/Title";

function App() {
	return (
		<>
			<Avatar size="small" />
			<Title />
			<Ratings />
			<Button icon="circle">Add To Cart</Button>
		</>
	);
}

export default App;

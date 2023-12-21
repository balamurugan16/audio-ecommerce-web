import Review from "./components/composite/Review";
import image from "./assets/385172.jpg";

function App() {
	return (
		<Review
			avatarSrc={image}
			username="Hinata"
			lastPosted="1 month ago"
			description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque id quo consectetur error autem porro esse vero natus perspiciatis deleniti?"
			ratings={4}
		/>
	);
}

export default App;

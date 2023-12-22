import styled from "styled-components";
import img from "../assets/auth-bg.png";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

function Signin() {
	return (
		<Wrapper>
			<header>
				<h1>Audio</h1>
				<p>It's modular and designed to last</p>
			</header>
			<section>
				<form>
					<Input icon="mail" placeholder="Email" />
					<Input icon="lock" placeholder="Password" />
					<p>Forgot Password</p>
				</form>
				<div className="actions">
					<Button variant="filled">Sign In</Button>
					<p>
						Didn't have any account?{" "}
						<Link className="link" to="/signup">
							Sign Up here
						</Link>
					</p>
				</div>
			</section>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	background-image: url(${img});
	background-size: cover;
	background-repeat: no-repeat;
	height: 100vh;
	color: var(--color-white);
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	font-size: 1.4rem;
	letter-spacing: 0.2px;

	header {
		text-align: center;
		h1 {
			font-size: 5rem;
			letter-spacing: 0.5rem;
		}
	}

	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;

		form {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		.actions {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;
			p a {
				color: var(--color-primary);
			}
		}
	}
`;

export default Signin;

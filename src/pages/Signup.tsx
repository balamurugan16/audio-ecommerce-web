import styled from "styled-components";
import img from "../assets/auth-bg.png";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import google from "../assets/google.svg";
import apple from "../assets/apple.svg";
import facebook from "../assets/facebook.svg";

function Signup() {
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
					<Button variant="filled">Sign up</Button>
				</form>
				<div className="actions">
					<div className="social-media">
						<div className="social-media__icon">
							<img src={apple} alt="apple" />
						</div>
						<div className="social-media__icon">
							<img src={facebook} alt="facebook" />
						</div>
						<div className="social-media__icon">
							<img src={google} alt="google" />
						</div>
					</div>
					<p>
						If you have an account?{" "}
						<Link className="link" to="/signin">
							Sign In here
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
		gap: 3rem;

		form {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
		.actions {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;
			p a {
				color: var(--color-primary);
			}
			.social-media {
				display: flex;
				gap: 3rem;
				margin: 1rem;
				.social-media__icon {
					background-color: var(--color-white);
					border-radius: 10px;
					padding: 1rem;
					min-width: 2.5rem;
					min-height: 2.5rem;
					display: grid;
					place-items: center;
				}
			}
		}
	}
`;

export default Signup;

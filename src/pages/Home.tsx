import styled from "styled-components";
import Header from "../components/ui/Header";
import FeatherIcon from "../components/ui/FeatherIcon";
import Avatar from "../components/ui/Avatar";
import img from "../assets/385172.jpg";
import Input from "../components/ui/Input";
import Banner from "../components/composite/Banner";
import headphones from "../assets/headphones.png";
import Product from "../components/composite/Product";
import Badge from "../components/ui/Badge";
import { Fragment } from "react";

function Home() {
	const username = "Hinata";
	return (
		<Fragment>
			<Wrapper>
				<Header>
					<FeatherIcon icon="menu" />
					<img src="/Logo.svg" alt="audio" />
					<Avatar size="small" src={img} />
				</Header>
				<Hero>
					<p>Hi, {username}</p>
					<h1>What are you looking for today?</h1>
					<Input placeholder="Search headphones" icon="search" />
				</Hero>
			</Wrapper>
			<Showcase>
				<div className="tabs">
					<Badge title="Headphone" filled />
					<Badge title="Headband" />
					<Badge title="Earpods" />
					<Badge title="Neckbands" />
				</div>
				<div className="banners">
					<Banner img={headphones} title="TMA-2 Modular Headphone" />
					<Banner img={headphones} title="TMA-2 Modular Headphone" />
				</div>
				<FeaturedProducts>
					<div className="card-header">
						<p>Featured Products</p>
						<span>See all</span>
					</div>
					<div className="products">
						<Product
							orientation="column"
							img={headphones}
							title="TMA-2 HD Wireless"
							price={350}
							rating={1}
							reviewCount={2}
						/>
						<Product
							orientation="column"
							img={headphones}
							title="TMA-2 HD Wireless"
							price={350}
							rating={1}
							reviewCount={2}
						/>
						<Product
							orientation="column"
							img={headphones}
							title="TMA-2 HD Wireless"
							price={350}
							rating={1}
							reviewCount={2}
						/>
					</div>
				</FeaturedProducts>
			</Showcase>
		</Fragment>
	);
}

const Wrapper = styled.main`
	padding: 2.5rem;
`;

const Hero = styled.section`
	display: flex;
	flex-direction: column;
	margin: 2rem 0;
	gap: 0.5rem;
	p {
		font-size: 1.4rem;
		font-weight: normal;
		line-height: 2;
	}
	h1 {
		font-size: 2.4rem;
		margin-bottom: 1.5rem;
	}
`;

const Showcase = styled.section`
	background-color: var(--color-grey-light-1);
	padding: 2.5rem;
	border-radius: 30px;
	.tabs {
		display: flex;
		gap: 2rem;
		justify-content: center;
		align-items: center;
		margin-bottom: 2rem;
	}
	.banners {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		overflow-x: auto;
	}
`;

const FeaturedProducts = styled.section`
	margin: 2rem 0;
	.card-header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 2rem;
		font-size: 1.4rem;
		p {
			font-size: 1.2rem;
		}
	}
	.products {
		display: flex;
		flex-direction: row;
		overflow-x: auto;
		gap: 1rem;
	}
`;

export default Home;

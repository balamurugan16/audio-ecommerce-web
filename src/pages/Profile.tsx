import styled from "styled-components";
import FeatherIcon from "../components/ui/FeatherIcon";
import Avatar from "../components/ui/Avatar";
import img from "../assets/385172.jpg";
import { Fragment } from "react";

const settings = [
	{
		tag: "General",
		items: [
			{
				label: "Edit Profile",
			},
			{
				label: "Notifications",
			},
			{
				label: "Wishlist",
			},
		],
	},
	{
		tag: "Legal",
		items: [
			{
				label: "Terms of Use",
			},
			{
				label: "Privacy Policy",
			},
		],
	},
	{
		tag: "Personal",
		items: [
			{
				label: "Report a Bug",
			},
			{
				label: "Logout",
			},
		],
	},
];

function Profile() {
	return (
		<Fragment>
			<Hero>
				<Header>
					<FeatherIcon icon="chevron-left" />
					<h3>Profile</h3>
				</Header>
				<UserBadge>
					<Avatar src={img} size="large" />
					<h4>Hinata</h4>
					<p>hinata@gmail.com</p>
				</UserBadge>
			</Hero>
			<Settings>
				{settings.map((setting) => (
					<>
						<dt>{setting.tag}</dt>
						{setting.items.map((item) => (
							<dd>{item.label}</dd>
						))}
					</>
				))}
			</Settings>
		</Fragment>
	);
}

export default Profile;

const Hero = styled.div`
	padding: 2.5rem;
	display: flex;
	flex-direction: column;
	gap: 4rem;
`;

const Header = styled.header`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	text-align: center;
	align-items: center;
	font-size: 1.6rem;
`;

const UserBadge = styled.section`
	display: grid;
	grid-template-columns: 30% 1fr;
	grid-template-rows: 1fr 1fr;
	font-size: 1.4rem;
	color: var(--color-grey-dark-1);

	img {
		grid-row: 1/3;
		grid-column: 1/2;
	}
	h4 {
		font-size: 1.6rem;
		color: var(--color-default);
		align-self: end;
	}
`;

const Settings = styled.dl`
	margin: 2rem 0;
	dt {
		padding: 1.5rem 2.5rem;
		color: var(--color-grey-dark-1);
		font-size: 1.4rem;
	}
	dd {
		padding: 1.5rem 2.5rem;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		font-size: 1.6rem;
	}
`;

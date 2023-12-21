import styled from "styled-components";
import Avatar from "../ui/Avatar";
import Ratings from "../ui/Ratings";

type Props = {
	avatarSrc: string;
	username: string;
	ratings: number;
	description: string;
	lastPosted: string;
};

function Review(props: Props) {
	return (
		<Wrapper>
			<div className="avatar">
				<Avatar size="small" src={props.avatarSrc} />
			</div>
			<h3>{props.username}</h3>
			<div className="ratings">
				<Ratings stars={props.ratings} />
			</div>
			<p className="last-posted">{props.lastPosted}</p>
			<p className="review-description">{props.description}</p>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: grid;
	grid-template-rows: 10% 10% 1fr;
	grid-template-columns: 10% 1fr 1fr;
	gap: 1.5rem;
	padding: 1rem;
	max-width: 35rem;
	.avatar {
		grid-column: 1 / 2;
		align-self: center;
		grid-row: 1 / 3;
	}
	h3 {
		font-size: 1.6rem;
		font-weight: 400;
		grid-column: 2 / 3;
		grid-row: 1 / 2;
	}
	.ratings {
		grid-column: 2 / 3;
		grid-row: 2 / 3;
	}
	.last-posted {
		color: var(--color-grey-dark-1);
		grid-column: 3 / 4;
		grid-row: 1 / 2;
		justify-self: end;
		font-size: 1.2rem;
	}
	.review-description {
		grid-column: 2 / 4;
		grid-row: 3 / 4;
		font-size: 1.4rem;
	}
`;

export default Review;

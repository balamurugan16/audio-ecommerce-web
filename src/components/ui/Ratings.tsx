import starFilled from "../../assets/star-filled.svg";
import styled from "styled-components";
import starOutlined from "../../assets/star-outlined.svg";
import { MouseEventHandler, useEffect, useState } from "react";

type RatingsProp = {
	stars: number;
	onChange: (stars: number) => void;
};

type StarProp = {
	filled?: boolean;
	onClick: MouseEventHandler;
};

function Star({ filled = false, onClick }: StarProp) {
	return (
		<img
			onClick={onClick}
			src={filled ? starFilled : starOutlined}
			alt="ratings star"
			width={24}
			height={24}
		/>
	);
}

export default function Ratings(props: RatingsProp) {
	const [stars, setStars] = useState(props.stars);

	useEffect(() => {
		props.onChange(stars);
	}, [stars]);

	return (
		<StyledRating className="rating">
			{Array(5)
				.fill(null)
				.map((_, id) => (
					<Star
						key={id}
						filled={id + 1 <= stars}
						onClick={() => {
							setStars(id + 1);
						}}
					/>
				))}
		</StyledRating>
	);
}

const StyledRating = styled.div`
	display: flex;
	gap: 0.5rem;
	img {
		cursor: pointer;
	}
`;

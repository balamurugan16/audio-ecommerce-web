import { useEffect, useState } from "react";
import styled from "styled-components";
import Star from "./Star";

type UneditableRatingsProp = {
	stars: number;
	editable?: false;
};
type EditableRatingsProp = {
	stars: number;
	editable?: true;
	onChange: (stars: number) => void;
};

type RatingsProp = EditableRatingsProp | UneditableRatingsProp;

export default function Ratings(props: RatingsProp) {
	const [stars, setStars] = useState(props.stars);

	useEffect(() => {
		if (props.editable) {
			props.onChange(stars);
		}
	}, [stars, props]);

	return (
		<StyledRating className="rating">
			{Array(5)
				.fill(null)
				.map((_, id) => (
					<Star
						key={id}
						filled={id + 1 <= stars}
						onClick={props.editable ? () => setStars(id + 1) : undefined}
						clickable={props.editable}
					/>
				))}
		</StyledRating>
	);
}

const StyledRating = styled.div`
	display: flex;
	gap: 0.5rem;
`;

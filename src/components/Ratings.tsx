// import starFilled from "../assets/star-filled.svg";
import styled from "styled-components";
import starOutlined from "../assets/star-outlined.svg";

export default function Ratings() {
	return (
		<StyledRating className="rating">
			<img src={starOutlined} alt="star" width={24} height={24} />
			<img src={starOutlined} alt="star" width={24} height={24} />
			<img src={starOutlined} alt="star" width={24} height={24} />
			<img src={starOutlined} alt="star" width={24} height={24} />
			<img src={starOutlined} alt="star" width={24} height={24} />
		</StyledRating>
	);
}

const StyledRating = styled.div`
	display: flex;
	gap: 0.5rem;
`;

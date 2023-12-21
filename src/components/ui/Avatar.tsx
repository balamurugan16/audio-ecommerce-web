import styled from "styled-components";
import image from "../../assets/385172.jpg";

type Props = {
	size: "small" | "large";
};

const SizeChart = {
	small: {
		width: 35,
		height: 35,
	},
	large: {
		width: 75,
		height: 75,
	},
};

export default function Avatar(props: Props) {
	const size = SizeChart[props.size];
	return <StyledAvatar src={image} width={size.width} height={size.height} />;
}

const StyledAvatar = styled.img`
	border-radius: 50%;
`;

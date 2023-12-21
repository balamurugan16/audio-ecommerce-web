import styled from "styled-components";

type Props = {
	size: "small" | "large";
	src: string;
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
	return (
		<StyledAvatar src={props.src} width={size.width} height={size.height} />
	);
}

const StyledAvatar = styled.img`
	border-radius: 50%;
`;

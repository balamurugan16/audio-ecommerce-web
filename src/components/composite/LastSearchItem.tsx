import styled from "styled-components";
import FeatherIcon from "../ui/FeatherIcon";

function LastSearchItem({ title }: { title: string }) {
	return (
		<Wrapper>
			<div>
				<FeatherIcon icon="clock" fill="var(--color-grey)" />
				<p>{title}</p>
			</div>
			<FeatherIcon icon="x" />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 0.5rem;
	div {
		display: flex;
		gap: 1.5rem;
		font-size: 2rem;
	}
`;

export default LastSearchItem;

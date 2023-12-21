import styled from "styled-components";
import FeatherIcon from "../ui/FeatherIcon";

type Props = {
	title: string;
	img: string;
	price: string;
};

function CartItem({ img, title, price }: Props) {
	return (
		<Wrapper>
			<img src={img} alt={title} />
			<div className="content">
				<h2 className="title">{title}</h2>
				<h4 className="price">{price}</h4>
				<div className="footer">
					<div className="quantity">
						<button>
							<FeatherIcon icon="minus" />
						</button>
						<span>{1}</span>
						<button>
							<FeatherIcon icon="plus" />
						</button>
					</div>
					<FeatherIcon icon="trash-2" fill="var(--color-grey-dark-1)" />
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	background-color: var(--color-white);
	border-radius: 1rem;
	display: flex;
	flex-direction: row;
	max-width: 30rem;
	align-items: center;
	gap: 0.5rem;
	padding: 0.5rem 1rem;
	img {
		width: 7rem;
	}
	.content {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		width: 100%;
	}
	.title {
		font-size: 1.4rem;
		font-weight: 400;
	}
	.price {
		font-weight: 700;
	}
	.footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		svg {
			width: 20px;
		}
		.quantity {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 2.5rem;
			span {
				font-size: 1.5rem;
			}
			button {
				background-color: transparent;
				border: 1px solid var(--color-grey-light-1);
				border-radius: 12px;
			}
		}
	}
`;

export default CartItem;

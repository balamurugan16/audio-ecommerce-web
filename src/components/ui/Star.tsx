import { MouseEventHandler } from "react";
import starFilled from "../../assets/star-filled.svg";
import starOutlined from "../../assets/star-outlined.svg";

type StarProp = {
	filled?: boolean;
	onClick?: MouseEventHandler;
	clickable?: boolean;
};

export default function Star({ clickable, filled = false, onClick }: StarProp) {
	return (
		<img
			onClick={onClick}
			style={{
				cursor: clickable ? "pointer" : "default",
			}}
			src={filled ? starFilled : starOutlined}
			alt="ratings star"
			width={12}
			height={12}
		/>
	);
}

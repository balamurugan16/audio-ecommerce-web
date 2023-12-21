import feather from "feather-icons";
import { useEffect } from "react";

export type FeatherIcons = keyof typeof feather.icons;

export type Props = {
	icon: FeatherIcons;
	fill?: string;
};

export default function FeatherIcon({ icon, fill }: Props) {
	useEffect(() => {
		feather.replace();
	}, []);

	return <i data-feather={icon} style={{ color: fill }}></i>;
}

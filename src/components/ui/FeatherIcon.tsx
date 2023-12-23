import feather, { FeatherIconNames } from "feather-icons";
import { useEffect } from "react";

export type Props = {
	icon: FeatherIconNames;
	fill?: string;
};

export default function FeatherIcon({ icon, fill }: Props) {
	useEffect(() => {
		feather.replace();
	}, []);

	return <i data-feather={icon} style={{ color: fill }}></i>;
}

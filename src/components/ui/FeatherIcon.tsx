import feather from "feather-icons";

export type FeatherIcons = keyof typeof feather.icons;

export type Props = {
	icon: FeatherIcons;
	fill?: string;
};

export default function FeatherIcon({ icon, fill }: Props) {
	const innerHTML = feather.icons[icon].toSvg();
	return (
		<i
			dangerouslySetInnerHTML={{ __html: innerHTML }}
			style={{ color: fill }}
		></i>
	);
}

import feather from "feather-icons";

export type Props = {
	icon: keyof typeof feather.icons;
};

export default function FeatherIcon({ icon }: Props) {
	const innerHTML = feather.icons[icon].toSvg();
	return <i dangerouslySetInnerHTML={{ __html: innerHTML }}></i>;
}

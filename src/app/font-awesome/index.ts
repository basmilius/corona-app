import { CreateElement, VNode } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { initializeFontAwesomeBrands } from "@/app/font-awesome/brands";
import { initializeFontAwesomeDuotone } from "@/app/font-awesome/duotone";
import { initializeFontAwesomeRegular } from "@/app/font-awesome/regular";

export function faIconRenderer(name: string | null, h: CreateElement): VNode
{
	if (name === null)
		return h("i", {class: ["mdi"]});

	let icon: string | string[] = name.split(" ");
	icon = icon.length === 1 ? icon[0] : icon;

	return h(FontAwesomeIcon, {
		class: "mdi", // So we don't need to change Latte UI's config.
		attrs: {
			height: "1em",
			width: "1em"
		},
		props: {icon}
	});
}

export function initializeFontAwesome(): void
{
	initializeFontAwesomeBrands();
	initializeFontAwesomeDuotone();
	initializeFontAwesomeRegular();
}

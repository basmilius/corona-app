import { library } from "@fortawesome/fontawesome-svg-core";

import {
	faBluetooth,
	faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

export function initializeFontAwesomeBrands(): void
{
	library.add(
		faBluetooth,
		faWhatsapp
	);
}

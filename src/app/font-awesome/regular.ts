import { library } from "@fortawesome/fontawesome-svg-core";

import {
	faArrowLeft,
	faEllipsisV,
	faExclamationTriangle,
	faInfoCircle,
	faTrashAlt,
	faUserFriends
} from "@fortawesome/pro-regular-svg-icons";

export function initializeFontAwesomeRegular(): void
{
	library.add(
		faArrowLeft,
		faEllipsisV,
		faExclamationTriangle,
		faInfoCircle,
		faTrashAlt,
		faUserFriends
	);
}

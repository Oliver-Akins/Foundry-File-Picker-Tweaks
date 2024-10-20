import { registerDevSettings } from "./dev_settings.mjs";
import { registerWorldSettings } from "./world_settings.mjs";

export function registerSettings() {
	fpt.utils.Logger.debug(`Registering settings`);
	registerWorldSettings();
	registerDevSettings();
};

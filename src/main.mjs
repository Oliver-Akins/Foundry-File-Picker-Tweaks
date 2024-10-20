// Hook Imports
import "./hooks/renderFilePicker.mjs";

// Misc Imports
import "./utils/global.mjs";
import { registerSettings } from "./settings/_index.mjs";

// MARK: init hook
Hooks.once(`init`, () => {
	fpt.utils.Logger.info(`Initializing`);

	registerSettings();
});


// MARK: ready hook
Hooks.once(`ready`, () => {
	fpt.utils.Logger.info(`Ready`);
});

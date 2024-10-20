import { Logger } from "./Logger.mjs";

Object.defineProperty(
	globalThis,
	`fpt`,
	{
		value: {
			/** The module's ID, for easy reference. */
			id: `file-picker-tweaks`,
			utils: Object.freeze({
				Logger,
			}),
		},
		writable: false,
	},
);

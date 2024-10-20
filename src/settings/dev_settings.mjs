export function registerDevSettings() {
	const isLocalhost = window.location.hostname === `localhost`;

	game.settings.register(fpt.id, `devMode`, {
		name: `Dev Mode?`,
		scope: `client`,
		type: Boolean,
		config: isLocalhost,
		default: false,
		requiresReload: false,
	});
};
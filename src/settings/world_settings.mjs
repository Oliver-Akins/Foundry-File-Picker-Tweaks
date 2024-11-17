export function registerWorldSettings() {

	game.settings.register(fpt.id, `folderRestriction`, {
		name: `FPT.settings.folderRestriction.name`,
		hint: `FPT.settings.folderRestriction.hint`,
		scope: `world`,
		config: true,
		type: Boolean,
		default: false,
		requiresReload: false,
	});

	game.settings.register(fpt.id, `goToFolder`, {
		scope: `world`,
		config: false,
		type: String,
		default: ``,
	});
	game.settings.register(fpt.id, `goToFolderTemp`, {
		name: `FPT.settings.goToFolder.name`,
		hint: `FPT.settings.goToFolder.hint`,
		scope: `world`,
		config: true,
		type: String,
		default: ``,
		async onChange(value) {
			let oldValue = game.settings.get(fpt.id, `goToFolder`);
			if (oldValue === value) return;

			// Validate that the folder exists
			FilePicker.browse(`data`, value)
			.then(() => {
				game.settings.set(fpt.id, `goToFolder`, value);
			})
			.catch(() => {
				game.settings.set(fpt.id, `goToFolderTemp`, oldValue);
				ui.notifications.error(`FPT.settings.goToFolder.notifs.dirNotExist`, { localize: true });
			});
		},
	});
};

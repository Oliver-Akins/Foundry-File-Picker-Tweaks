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

	game.settings.register(fpt.id, `folderRestrictionBypassRole`, {
		name: `FPT.settings.folderRestrictionBypassRole.name`,
		hint: `FPT.settings.folderRestrictionBypassRole.hint`,
		scope: `world`,
		config: true,
		type: Number,
		default: CONST.USER_ROLES.GAMEMASTER,
		choices: Object.entries(CONST.USER_ROLES)
			.reduce(
				(obj, [name, level]) => {
					if (level <= 0) return obj;
					obj[level] = game.i18n.localize(`USER.Role${name.titleCase()}`);
					return obj;
				},
				{}
			),
		onChange(value) {
			if (value === CONST.USER_ROLES.PLAYER) {
				game.settings.set(fpt.id, `folderRestrictionBypassRole`, CONST.USER_ROLES.GAMEMASTER);
				game.settings.set(fpt.id, `folderRestriction`, false);
				ui.notifications.info(`FPT.settings.folderRestrictionBypassRole.notifs.disableRestriction`, { localize: true })
			}
		},
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

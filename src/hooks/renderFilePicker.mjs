Hooks.on(`renderFilePicker`, (fp, jq, rd) => {

	// MARK: Folder Restrict
	const restrictFolder = game.settings.get(fpt.id, `folderRestriction`);
	if (restrictFolder && fp.activeSource === `data`) {
		const restrictionBypass = game.settings.get(fpt.id, `folderRestrictionBypassRole`);
		const folderTarget = game.settings.get(fpt.id, `goToFolder`);
		if (
			folderTarget !== ``
			&& !game.user.hasRole(restrictionBypass)
			&& !fp.result.target.startsWith(folderTarget)
		) {
			fp.browse(folderTarget);
			return false;
		};
	};
});

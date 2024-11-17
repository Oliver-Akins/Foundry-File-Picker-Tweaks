Hooks.on(`renderFilePicker`, (fp, jq, rd) => {

	// MARK: Folder Restrict
	const restrictFolder = game.settings.get(fpt.id, `folderRestriction`);
	if (restrictFolder && fp.activeSource === `data`) {
		const folderTarget = game.settings.get(fpt.id, `goToFolder`);
		if (
			folderTarget !== ``
			&& !PermissionManager.can(fpt.id, `bypassFolderNavigationLock`)
			&& !fp.result.target.startsWith(folderTarget)
		) {
			fp.browse(folderTarget);
			return false;
		};
	};
});

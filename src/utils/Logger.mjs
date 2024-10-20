const augmentedProps = new Set([
	`debug`,
	`log`,
	`error`,
	`info`,
	`warn`,
	`group`,
	`time`,
	`timeEnd`,
	`timeLog`,
	`timeStamp`,
]);

/** @type {Console} */
export const Logger = new Proxy(console, {
	get(target, prop, _receiver) {
		if (augmentedProps.has(prop)) {
			return (...args) => target[prop](fpt.id, `|`, ...args);
		};
		return target[prop];
	},
});

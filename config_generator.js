const DefaultSettings = {
	allowPromptOnFirstLogin: false,
	sessionFirstLogin: true
};

module.exports = function MigrateSettings(from_ver, to_ver, settings) {
	if (from_ver === undefined) {
		// Migrate legacy config file
		return Object.assign(Object.assign({}, DefaultSettings), settings);
	} else if (from_ver === null) {
		// No config file exists, use default settings
		return DefaultSettings;
	} else {
		// Migrate from older version (using the new system) to latest one
		switch (from_ver) {
			default:
				return DefaultSettings;
		}
	}
};
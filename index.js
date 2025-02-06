module.exports = class mod {
	constructor(mod) {
		mod.loadSettings()

		mod.dispatch.addOpcode("S_RESPONSE_SERVER_ADMINTOOL_AWESOMIUM_URL", 62158)

		mod.hook("S_LOGIN", "raw", () => {
			mod.hookOnce("S_RESPONSE_SERVER_ADMINTOOL_AWESOMIUM_URL", "raw", () => {
				const result = mod.settings.allowPromptOnFirstLogin && mod.settings.sessionFirstLogin
				mod.settings.sessionFirstLogin = false
				mod.saveSettings()
				return result
			})
		})

		mod.command.add("promptbegone", () => {
			mod.settings.allowPromptOnFirstLogin = !mod.settings.allowPromptOnFirstLogin
			mod.command.message(`First-login prompt visibility ${mod.settings.allowPromptOnFirstLogin ? `en` : `dis`}abled.`)
			mod.saveSettings()
		})

		this.destructor = () => {
			mod.settings.sessionFirstLogin = true
			mod.saveSettings()
		}
	}
}
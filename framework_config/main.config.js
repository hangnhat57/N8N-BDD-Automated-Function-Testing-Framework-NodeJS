require ('dotenv').config ();
const { multiCapabilities } = require ('./multiBrowsers.conf');
const { plugins } = require ('./plugins.conf');
const { browsers } = require ('./browsers.conf');
const { baseUrls } = require ('./baseUrls.conf');
const { cucumberOpts } = require ('./cucumberOpts.conf');
const TEST_ENVIRONMENT = process.env.TEST_ENVIRONMENT || "staging";
const SELENIUM_HUB = process.env.SELENIUM_HUB || "http://127.0.0.1:4444/wd/hub";
const TEST_PARALLEL = process.env.TEST_PARALLEL || '';
let mainConfig = {
	allScriptsTimeout: 3*60*1000,
	getPageTimeout: 60000,
	seleniumAddress: SELENIUM_HUB,
	baseUrl: baseUrls[TEST_ENVIRONMENT],
	chromeOnly: false,
	framework: "custom",
	frameworkPath: require.resolve ("protractor-cucumber-framework"),
	specs: ["../features/*.feature"],
	exclude: "../features/ignore.feature",
	ignoreUncaughtExceptions: true,
	directConnect: false,
	SELENIUM_PROMISE_MANAGER: false,
	onPrepare: async function () {
		browser.ignoreSynchronization = true;
		await browser.getProcessedConfig().then((config)=>{
			browser.params.metadata = config.capabilities.metadata;
			switch(config.capabilities.metadata.platform.type) {
				case 'mobile': config.cucumberOpts.tags = "@mobile and not @ignore";break;
				case 'desktop': config.cucumberOpts.tags = "@desktop and not @ignore";break;
				default: console.log("No platform specific in metadata, the test might be break"); break;
			}
		});
		require ('babel-register');
	},

};
if (TEST_PARALLEL.toUpperCase () === "ON") {
	mainConfig.multiCapabilities = multiCapabilities;
} else {
	mainConfig.capabilities = browsers[process.env.BROWSER_NAME || 'chrome'];
}
mainConfig.plugins = plugins;
mainConfig.cucumberOpts = cucumberOpts;


process.env['UPDATE_GOLDENS'] = "";
module.exports.config = mainConfig;

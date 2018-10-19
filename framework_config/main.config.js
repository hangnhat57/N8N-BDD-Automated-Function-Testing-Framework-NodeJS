require('dotenv').config();
const {multiCapabilities} = require('./multiBrowsers.conf');
const {plugins} = require('./plugins.conf');
const {browsers} = require('./browsers.conf');
const {baseUrls} = require('./baseUrls.conf');
const {cucumberOpts} = require('./cucumberOpts.conf');
const TEST_ENVIRONMENT = process.env.TEST_ENVIRONMENT || "staging";
const SELENIUM_HUB = process.env.SELENIUM_HUB || "http://127.0.0.1:4444/wd/hub";
const TEST_PARALLEL = process.env.TEST_PARALLEL || '';

let mainConfig = {
	allScriptsTimeout: 60000,
	getPageTimeout: 60000,
	seleniumAddress: SELENIUM_HUB,
    baseUrl: baseUrls[TEST_ENVIRONMENT],
    chromeOnly: false,
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: ["../features/*.feature"],
    exclude: "../features/ignore.feature",
    ignoreUncaughtExceptions: true,
	directConnect: false,
	SELENIUM_PROMISE_MANAGER:false,
    onPrepare: function() {
	    browser.ignoreSynchronization=true;
	    require('babel-register');
    }
};
if(TEST_PARALLEL.toUpperCase() === "ON"){
    mainConfig.multiCapabilities = multiCapabilities;
}else{
    mainConfig.capabilities =  browsers[process.env.BROWSER_NAME || 'chrome'];
}
mainConfig.plugins = plugins;
mainConfig.cucumberOpts = cucumberOpts;
process.env['UPDATE_GOLDENS'] = "";
module.exports.config = mainConfig;

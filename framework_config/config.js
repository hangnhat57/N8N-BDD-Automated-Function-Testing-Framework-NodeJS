
const VisualReview = require('visualreview-protractor');
var vr = new VisualReview({
	hostname: 'localhost',
	port: 7000
});
require('dotenv').config();
const {multiCapabilities} = require('./multiBrowsers.conf');
const {plugins} = require('./plugins.conf');
const {browsers} = require('./browsers.conf');
const {baseUrls} = require('./baseUrls.conf');
const {cucumberOpts} = require('./cucumberOpts.conf');
const  TEST_ENVIRONMENT = process.env.TEST_ENVIRONMENT || "staging";
const SELENIUM_HUB = process.env.SELENIUM_HUB || "http://127.0.0.1:4444/wd/hub";
const TEST_PARALLEL = process.env.TEST_PARALLEL || null;

let config = {
    seleniumAddress: SELENIUM_HUB,
    baseUrl: baseUrls[TEST_ENVIRONMENT],
    chromeOnly: false,
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: ["../features/*.feature"],
    exclude: "../features/ignore.feature",
    restartBrowserBetweenTests:true,
    ignoreUncaughtExceptions: true,
    onPrepare: function() {
        browser.manage().window().maximize();
        require('babel-register');
        browser.ignoreSynchronization = true;
    },
	beforeLaunch: function() {
		// Creates a new run under project name 'myProject', suite 'mySuite'.
		return vr.initRun('DontLeave', 'MeAlone');
	},

	afterLaunch: function(exitCode) {
		// finalizes the run, cleans up temporary files
		return vr.cleanup(exitCode);
	},

	// expose VisualReview protractor api in tests
	params: {
		visualreview: vr
	}
};
if(TEST_PARALLEL.toUpperCase() === "ON"){
    config.multiCapabilities = multiCapabilities;
}else{
    config.capabilities =  browsers[process.env.BROWSER_NAME || 'chrome'];
}
config.plugins = plugins;
config.cucumberOpts = cucumberOpts;
module.exports.config = config;

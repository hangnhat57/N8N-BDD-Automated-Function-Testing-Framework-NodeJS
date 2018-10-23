"use strict";
import { browser } from 'protractor';
import { setDefaultTimeout } from "cucumber";
let metadata;
const sec = 1000;
const { BeforeAll, Before, After, Status } = require ("cucumber");
const conf = require ("../framework_config/main.config").config;

BeforeAll ({ timeout: 60 * sec }, async function () {
	console.log ("\nStart executing test suite ....")
});
Before (async function () {
	return await setDefaultTimeout (60 * sec);
});
Before (async function () {
	return await browser.getProcessedConfig().then((config)=>{
		metadata = config.capabilities.metadata;
	});
});
Before ({ tags: "@Romans" }, async function () {
	return await browser.get (conf.baseUrl);
});
Before ({ tags: "@AllureScenario or @CucumberScenario or @ProtractorScenario" }, async function () {
	return await browser.get ("https://google.com/ncr");
});


After (async function (scenario) {
	let attach;
	if (scenario.result.status === Status.FAILED) {
		attach = await this.attach; // cucumber's world object has attach function which should be used
		return await browser.takeScreenshot ().then (function (png) {
			const decodedImage =  new  Buffer (png, "base64");
			return attach (decodedImage, "image/png");
		});
	}
	await browser.restart ();
});

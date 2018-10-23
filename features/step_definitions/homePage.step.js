import Globals from '../../cucumber_support/globals';
import { browser } from 'protractor';
import { Given } from "cucumber";
import * as blueharvest from "blue-harvest";

// Chai
const globals = new Globals ();
const expect = globals.expect;

Given (/^I am on google page with title "(.*?)"$/, async (title) => {
	return await expect (browser.getTitle ()).to.eventually.equal (title);
});

Given (/^I am on allure page with title "(.*?)"$/, async (title) => {
	return await expect (browser.getTitle ()).to.eventually.equal (title);
});

Given (/^I am on cucumber page with title "(.*?)"$/, async (title) => {
	return await expect (browser.getTitle ()).to.eventually.equal (title);
});

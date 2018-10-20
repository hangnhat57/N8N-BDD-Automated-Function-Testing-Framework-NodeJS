import Globals from '../../cucumber_support/globals';
import { browser } from 'protractor';
import { When, Then } from "cucumber";
import { GoogleSearch } from "../../pages/googleSearch.po";
// Chai
const globals = new Globals ();
const expect = globals.expect;

When (/^I type "(.*?)"$/, async (text) => {
	return await new GoogleSearch ().searchFor (text)
});

Then (/^I click search button$/, async () => {
	//Here performing keyboard enter as google's search button keeps on changing
	return await browser.actions ().sendKeys (protractor.Key.ENTER).perform ();
});

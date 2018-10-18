
import Globals from '../../cucumber_support/globals';
import { browser } from 'protractor';
import { When, Then } from "cucumber";
import {GoogleSearchPo} from "../../pages/googleSearch.po";
// Chai
const globals = new Globals();
const expect = globals.expect;

When(/^I type "(.*?)"$/, (text) => {
    return new GoogleSearchPo().searchFor(text)
});

Then(/^I click search button$/,  () => {
    //Here performing keyboard enter as google's search button keeps on changing
    return  browser.actions().sendKeys(protractor.Key.ENTER).perform();
});

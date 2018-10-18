import { browser } from 'protractor';

const EC = browser.ExpectedConditions;
/*
This class assists in waiting for non-angular page screen elements
 */
export class ElementHelper {
	static waitForPresent(ele) {
		return browser.wait(EC.presenceOf(ele),30*1000,'Element is not present');
	}
	static waitForDisplay(ele) {
		return browser.wait(ele.isDisplayed,30*1000,'Element is not displayed');
	}
	static async waitForElement(ele) {
		await ElementHelper.waitForPresent(ele);
		await ElementHelper.waitForDisplay(ele);
	}
}




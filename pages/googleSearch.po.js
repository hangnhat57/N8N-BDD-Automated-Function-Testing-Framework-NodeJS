import { sendKeys } from "../browser_utilities";
const globals = new Globals();
const expect = globals.expect;
import * as blueharvest from 'blue-harvest';
import Globals from "../cucumber_support/globals";
const google = process.cwd() + "/visual-regression/google.png";

export class GoogleSearch {
    constructor(){
        this.searchTextBox = $("#lst-ib");
        this.searchButton = $("input[value='Google Search']");
    }
    async searchFor(values){
	    const mask = await blueharvest.addMask(this.searchTextBox, 'gray', 99999, 10, 20, 1.1);
	    const data = await browser.takeScreenshot();
	    const result = await blueharvest.compareScreenshot(data, google);
	    await expect(result).to.be.true;
        await sendKeys(this.searchTextBox,values);
    }
}



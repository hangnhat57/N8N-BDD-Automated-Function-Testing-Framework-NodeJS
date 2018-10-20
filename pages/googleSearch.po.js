import { sendKeys, click } from "../browser_utilities";
import { compareVisual, masking } from "../visual_utilities/visualHelper";
import BasePage from "./basePage.po";

export class GoogleSearch extends BasePage {
	constructor() {
		super ();
		this.searchTextBox = $ ("#lst-ib");
		this.searchButton = $ ("input[value='Google Search']");
		this.logo = $ ("img[id='hplogo']");
	}

	async searchFor(values) {
		await click (this.logo);
		let mask = await masking (this.logo);
		await compareVisual (values, mask);
		await sendKeys (this.searchTextBox, values);
	}
}



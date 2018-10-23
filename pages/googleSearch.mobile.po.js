import { sendKeys, click } from "../browser_utilities";
import { compareVisual, masking } from "../visual_utilities/visualHelper";
import BasePage from "./basePage";

export class GoogleSearchMobile extends BasePage {
	constructor() {
		super ();
		this.searchButton = $ ("input[name='q']");
        this.logo = $ ("img[id='hplogo']");
        this.btnSubmit = $("button[jsaction='click:.CLIENT']");
	}

	async searchFor(values) {
		await click (this.logo);
		let mask = await masking (this.logo);
		await compareVisual (values, mask);
		await sendKeys (this.searchTextBox, values);
    }
    async submitSearch(){
        await click(this.btnSubmit);
    }
}



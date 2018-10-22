import BasePage from "./basePage";
import { waitToBeDisplayed } from '../browser_utilities';

export class ResultPageDesktop extends BasePage {
	constructor() {
		super ();
		this.resultTitle = element (by.xpath ("//div[@class='mid']/h1"));
	}

	async shouldBeInResultPage(location) {
		await waitToBeDisplayed (this.resultTitle);
		await this.expect (this.resultTitle.getText ()).to.eventually.contains (location);
	}
}

import BasePage from "./basePage.po";
import { waitToBeDisplayed } from '../browser_utilities';
import Globals from "../cucumber_support/globals";

const globals = new Globals ();
const expect = globals.expect;

export class SearchResultPage extends BasePage {
	constructor() {
		super ();
		this.resultTitle = element (by.xpath ("//div[@class='mid']/h1"));
	}

	async shouldBeInResultPage(location) {
		await waitToBeDisplayed (this.resultTitle);
		await this.expect (this.resultTitle.getText ()).to.eventually.contains (location);
	}
}

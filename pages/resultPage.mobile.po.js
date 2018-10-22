import BasePage from "./basePage";
import { waitToBeDisplayed } from "../browser_utilities";

export class ResultPageMobile extends BasePage{
	constructor(){
		super();
		this.resultTitle = $("#titleText");
	}
	async shouldBeInResultPage(){
		await waitToBeDisplayed(this.resultTitle);
	}
}

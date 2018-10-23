import BasePage from "./basePage";
import { compareVisual, masking } from "../visual_utilities/visualHelper";
import { click } from "../browser_utilities";

export class HomePageMobile extends BasePage{
	constructor(){
		super();
		this.BuyRent = element (By.xpath("//div[@role='application']"));
		this.ipPropertySearchLocation = $("#propertySearchLocation");
		this.btnSearch = element (By.xpath("//div[@class='ui-submit ui-btn ui-btn-up-b ui-shadow ui-btn-corner-all']"));
	}
	async searchForProperties(buyRentOption, location) {
		await this.clickBuyRent (buyRentOption);
		await this.ipPropertySearchLocation.sendKeys (location);
		await this.btnSearch.click ();
	}
	async shouldBeOnHomePage() {
		await compareVisual ('HomePage');
		await this.expect (browser.getTitle ()).to.eventually.contains ("Romans Estate Agents | Letting Agents | Property Valuations");
	}
	async clickBuyRent(option) {
		switch (option) {
			case 'Buy':
				console.log("Buy option, do nothing");
				break;
			case 'Rent':
				await click (this.BuyRent);
				break;
			default:
				console.log ("No option selected , leave it as Buy");
				break;
		}
	};
}

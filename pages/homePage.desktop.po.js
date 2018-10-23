import BasePage from "./basePage";
import { selectOptionByText, click } from "../browser_utilities";
import Globals from "../cucumber_support/globals";

const globals = new Globals ();
const expect = globals.expect;
import { compareVisual, masking } from "../visual_utilities/visualHelper";


export class HomePageDesktop extends BasePage {
	constructor() {
		super ();
		this.rdBuy = $ ("label[id='lblrdCustomBuy']");
		this.rdRent = $ ("label[id='lblrdCustomRent']");
		this.ipPropertySearchLocation = $ ("input[id='propertySearchLocation']");
		this.slMinPrice = $ ("select[id='CustomBuyMinPrice']");
		this.slMaxPrice = $ ("select[id='CustomBuyMaxPrice']");
		this.slMinBed = $ ("select[id='CustomMinBed']");
		this.btnSearch = $ ("button[id='CustomSearch']");
		this.imgSlider = $ ("a[href='http://www.romans.co.uk/selling/freevaluation']");
		this.cookiesIcon = $ ("#ccc-icon");
		this.maskedcccouter = element (by.xpath ("//div[@class='ccc-outer']"));
		this.maskedcccinner = element (by.xpath ("//div[@class='ccc-inner']"));
		this.maskedbutton = element (by.xpath ("//button[@class='ccc-expand']"));
	}

	async searchForProperties(buyRentOption, location, minPrice, maxPrice, minBedroom) {
		await this.clickBuyRent (buyRentOption);
		await this.ipPropertySearchLocation.sendKeys (location);
		await this.selectOptions (this.slMinPrice, minPrice);
		await this.selectOptions (this.slMaxPrice, maxPrice);
		await this.selectOptions (this.slMinBed, minBedroom);
		await this.btnSearch.click ();
	}

	async shouldBeOnHomePage() {
		let maskingArray = [this.imgSlider, this.cookiesIcon,
			this.maskedcccouter,
			this.maskedcccinner,
			this.maskedbutton];
		let masked;
		masked = await masking (maskingArray);
		await click ($ (".body"));
		await compareVisual ('HomePage', masked);
		await this.expect (browser.getTitle ()).to.eventually.contains ("Best Estate and Lettings Agents in UK");
	}

	async selectOptions(element, value) {
		if (value !== null && value !== '' && value !== '-') {
			await selectOptionByText (element, value);
		}
	};

	async clickBuyRent(option) {
		switch (option) {
			case 'Buy':
				await click (this.rdBuy);
				break;
			case 'Rent':
				await click (this.rdRent);
				break;
			default:
				console.log ("No option selected , leave it as default");
				break;
		}
	};


}

import { sendKeys, waitToBePresent } from "../browser_utilities";
import { compareVisual, masking } from "../visual_utilities/elementPath";
import BasePage from "./basePage.po";

export class GoogleSearch extends BasePage{
    constructor(){
    	super();
        this.searchTextBox = $("#lst-ib");
        this.searchButton = $("input[value='Google Search']");
        this.logo = $("img[id='hplogo']");
    }
    async searchFor(values){
    	let mask = await masking(this.logo);
    	await compareVisual('google',mask);
        await sendKeys(this.searchTextBox,values);
    }
}



import BasePage from "./basePage.po";
import Globals from "../cucumber_support/globals";
import { selectOptionByText , click, log } from "../browser_utilities";
const globals = new Globals();
const expect = globals.expect;
import * as blueharvest from 'blue-harvest';
import { compareVisual, masking } from "../visual_utilities/elementPath";
const homepagePath = process.cwd() + "/visual-regression/homepage.png";

export class HomePage extends BasePage{
    constructor(){
        super();
        this.rdBuy = $("label[id='lblrdCustomBuy']");
        this.rdRent = $("label[id='lblrdCustomRent']");
        this.ipPropertySearchLocation = $("input[id='propertySearchLocation']");
        this.slMinPrice = $("select[id='CustomBuyMinPrice']");
        this.slMaxPrice = $("select[id='CustomBuyMaxPrice']");
        this.slMinBed = $("select[id='CustomMinBed']");
        this.btnSearch = $("button[id='CustomSearch']");
        this.imgSlider = $("a[href='http://www.romans.co.uk/selling/freevaluation']")
    }
    async searchForProperties(buyRentOption,location,minPrice,maxPrice,minBedroom){
        await this.clickBuyRent(buyRentOption);
        await this.ipPropertySearchLocation.sendKeys(location);
        await this.selectOptions(this.slMinPrice,minPrice);
        await this.selectOptions(this.slMaxPrice,maxPrice);
        await this.selectOptions(this.slMinBed,minBedroom);
        await this.btnSearch.click();
    }
    async shouldBeOnHomePage(){
        let make;
        make = await masking(this.imgSlider);
        await compareVisual('homepage',make);
        log("verify browser title");
        await expect(browser.getTitle()).to.eventually.contains("Best Estate and Lettings Agents in UK");
        log("Finished!")
    }
    async selectOptions(element,value){
        if(value!==null && value!=='' && value!=='-'){
            await selectOptionByText(element,value);
        }
    };
    async clickBuyRent(option){
      switch (option) {
        case 'Buy':
            await click(this.rdBuy);
            break;
        case 'Rent':
            await click(this.rdRent);
            break;
        default:
            console.log("No option selected , leave it as default");
            break;
      }
    };




}

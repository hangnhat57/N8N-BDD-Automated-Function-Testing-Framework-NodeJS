import BasePagePo from "./basePage.po";
import Globals from "../cucumber_support/globals";
import { selectOptionByText , click, log } from "../browser_utilities";
const globals = new Globals();
const expect = globals.expect;
export class homePagePo extends BasePagePo{
    constructor(){
        super();
        this.rdBuy = $("label[id='lblrdCustomBuy']");
        this.rdRent = $("label[id='lblrdCustomRent']");
        this.ipPropertySearchLocation = $("input[id='propertySearchLocation']");
        this.slMinPrice = $("select[id='CustomBuyMinPrice']");
        this.slMaxPrice = $("select[id='CustomBuyMaxPrice']");
        this.slMinBed = $("select[id='CustomMinBed']");
        this.btnSearch = $("button[id='CustomSearch']");
    }
    searchForProperties(buyRentOption,location,minPrice,maxPrice,minBedroom){
        this.clickBuyRent(buyRentOption);
        this.ipPropertySearchLocation.sendKeys(location);
        this.selectOptions(this.slMinPrice,minPrice);
        this.selectOptions(this.slMaxPrice,maxPrice);
        this.selectOptions(this.slMinBed,minBedroom);
        this.btnSearch.click();
    }
    async shouldBeOnHomePage(){
        log("verify browser title");
        await expect(browser.getTitle()).to.eventually.contains("Best Estate and Lettings Agents in UK");
        log("Finished!")
    }
    selectOptions(element,value){
        if(value!==null && value!=='' && value!=='-'){
            selectOptionByText(element,value);
        }
    };
    clickBuyRent(option){
      switch (option) {
        case 'Buy':
            click(this.rdBuy);
            break;
        case 'Rent':
            click(this.rdRent);
            break;
        default:
            console.log("No option selected , leave it as default");
            break;
      }
    };


    

}

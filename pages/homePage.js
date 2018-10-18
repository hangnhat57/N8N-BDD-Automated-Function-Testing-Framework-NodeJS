import BasePage from "./basePage";
import Globals from "../support/globals";
const globals = new Globals();
const expect = globals.expect;
export class homePage extends BasePage{
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
        await expect(browser.getTitle()).to.eventually.contains("Best Estate and Lettings Agents in UK");

    }
    selectOptions(element,value){
        if(value!==null && value!=='' && value!=='-'){
            this.selectHelper.selectByValue(element,value);
        }
    };
    clickBuyRent(option){
      switch (option) {
        case 'Buy':
            this.rdBuy.click();
            break;
        case 'Rent':
            this.rdRent.click();
            break;
        default:
            console.log("No option selected , leave it as default");
            break;
      }
    };


    

}

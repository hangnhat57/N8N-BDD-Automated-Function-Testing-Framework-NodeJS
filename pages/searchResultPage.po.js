import basePage from "./basePage.po";
import { waitToBePresent, log } from "../browser_utilities";

export class searchResultPagePo extends basePage{
    constructor(){
        super();
        this.resultTitle = element(by.xpath("//div[@class='mid']/h1/span"));
    }
     shouldBeInResultPage(location){
         log("Verify result title");
         //waitToBePresent(this.resultTitle);
         this.expect(this.resultTitle.getText()).to.eventually.contains(location);
         log("Finish verify");
    }
}

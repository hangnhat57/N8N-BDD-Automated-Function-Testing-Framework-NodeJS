import BasePage from "./basePage.po";
import { waitToBePresent, log } from "../browser_utilities";

export class SearchResultPage extends BasePage {
    constructor(){
        super();
        this.resultTitle = element(by.xpath("//div[@class='mid']/h1/span"));
    }
     async shouldBeInResultPage(location){
         log("Verify result title");
         //waitToBePresent(this.resultTitle);
         await this.expect(this.resultTitle.getText()).to.eventually.contains(location);
         log("Finish verify");
    }
}

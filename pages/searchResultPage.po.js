import basePage from "./basePage.po";
import { waitToBePresent, log } from "../browser_utilities";
var vr = browser.params.visualreview;

export class searchResultPagePo extends basePage{
    constructor(){
        super();
        this.resultTitle = element(by.xpath("//div[@class='mid']/h1/span"));
    }
     async shouldBeInResultPage(location){
         log("Verify result title");
         log(browser.params);
	     await vr.takeScreenshot('Google-homepage');
	     await this.expect(this.resultTitle.getText()).to.eventually.contains(location);
         log("Finish verify");
    }
}

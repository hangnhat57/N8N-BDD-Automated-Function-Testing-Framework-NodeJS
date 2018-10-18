import basePage from "./basePage";

export class searchResultPage extends basePage{
    constructor(){
        super();
        this.resultTitle = element(by.xpath("//div[@class='mid']/h1/span"));
    }
     shouldBeInResultPage(location){
         this.elementHelper.waitForElement(this.resultTitle);
         this.expect(this.resultTitle.getText()).to.eventually.contains(location);
    }
}
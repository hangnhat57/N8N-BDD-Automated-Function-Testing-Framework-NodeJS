import { sendKeys } from "../browser_utilities";

export class GoogleSearchPo {
    constructor(){
        this.searchTextBox = $("#lst-ib");
        this.searchButton = $("input[value='Google Search']");
    }
    searchFor(values){
        sendKeys(this.searchTextBox,values);
    }
}




import { Then } from "cucumber";
import { GoogleSearchPo } from "../../pages/googleSearch.po";

// GoogleSearchPo page instance

Then(/^I clear search textbox$/, () => {
    return new GoogleSearchPo().searchTextBox.clear();
});


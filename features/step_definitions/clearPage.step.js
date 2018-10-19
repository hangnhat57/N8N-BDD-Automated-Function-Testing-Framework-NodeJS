
import { Then } from "cucumber";
import { GoogleSearch } from "../../pages/googleSearch.po";

// GoogleSearchPo page instance

Then(/^I clear search textbox$/, async () => {
    return await new GoogleSearch().searchTextBox.clear();
});


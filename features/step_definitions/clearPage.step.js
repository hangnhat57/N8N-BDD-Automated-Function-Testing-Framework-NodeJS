import { Then } from "cucumber";
import { GoogleSearch } from "../../pages/googleSearch.desktop.po";

// GoogleSearchPo page instance

Then (/^I clear search textbox$/, async () => {
	return await new GoogleSearch ().searchTextBox.clear ();
});


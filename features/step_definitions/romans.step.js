import {HomePage} from "../../pages/homePage.po";
import {Given,When,Then} from 'cucumber';
import {SearchResultPage} from "../../pages/searchResultPage.po";
import {PassedData} from "../../global-data/passedData";

Given(/^I on home page$/,   async function () {
    console.log("Stay in romans")
     await new HomePage().shouldBeOnHomePage();
});
When(/^I search for properties for sale with these criteria$/, async function (table) {
    var data = table.raw();
    var buyRentOption = data[1][0];
    var location = data [1][1];
    PassedData.location = location;
    var minPrice = data[1][2];
    var maxPrice = data[1][3];
    var minBedroom = data[1][4];
    await new HomePage().searchForProperties(buyRentOption,location,minPrice,maxPrice,minBedroom);

});
Then(/^I should be in result page for those properties$/,  async function () {
       await new SearchResultPage().shouldBeInResultPage(PassedData.location);
});

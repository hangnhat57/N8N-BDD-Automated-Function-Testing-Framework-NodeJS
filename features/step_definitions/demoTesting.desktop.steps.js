import { HomePageDesktop } from "../../pages/homePage.desktop.po";
import { Given, When, Then } from 'cucumber';
import { ResultPageDesktop } from "../../pages/resultPage.desktop.po";
import { PassedData } from "../../global-data/passedData";

Given (/^Desktop I on home page$/, async function () {
	await new HomePageDesktop ().shouldBeOnHomePage ();
});
When (/^Desktop I search for properties for sale with these criteria$/, async function (table) {
	let data = table.raw ();
	var buyRentOption = data[1][0];
	var location = data [1][1];
	PassedData.location = location;
	var minPrice = data[1][2];
	var maxPrice = data[1][3];
	var minBedroom = data[1][4];
	await new HomePageDesktop ().searchForProperties (buyRentOption, location, minPrice, maxPrice, minBedroom);

});
Then (/^Desktop I should be in result page for those properties$/, async function () {
	await new ResultPageDesktop ().shouldBeInResultPage (PassedData.location);
});

import { Given, When, Then } from 'cucumber';
import { HomePageMobile } from "../../pages/homePage.mobile.po";
import { PassedData } from "../../global-data/passedData";
import { ResultPageMobile } from "../../pages/resultPage.mobile.po";


Given (/^Mobile I on home page$/, async function () {
	await new HomePageMobile().shouldBeOnHomePage();
});

When (/^Mobile I search for properties for sale with these criteria$/, async function (table) {
	let data = table.raw ();
	let buyRentOpt = data[1][0];
	let location = data[1][1];
	PassedData.location = location;
	await new HomePageMobile().searchForProperties(buyRentOpt,location);

});

Then (/^Mobile I should be in result page for those properties$/, async function () {
		await new ResultPageMobile().shouldBeInResultPage();
});



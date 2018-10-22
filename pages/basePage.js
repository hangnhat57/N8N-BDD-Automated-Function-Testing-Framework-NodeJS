import Globals from "../cucumber_support/globals";

const globals = new Globals ();
const expect = globals.expect;
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { browser } from 'protractor';


class BasePage {

	constructor() {
		this.browser = browser;
		this.expect = chai.expect;
		chai.use (chaiAsPromised);
	}

}

export default BasePage;

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { browser } from 'protractor';
import { ElementHelper } from '../utilities/elementHelpers';
import { SelectHelper } from '../utilities/selectHelpers';
//import {Utils} from "../utilities/utils";


class BasePage {

    constructor(){
        this.browser = browser;
        this.selectHelper = SelectHelper;
        this.elementHelper = ElementHelper;
        this.expect = chai.expect;
        chai.use(chaiAsPromised);
    }

}
export default BasePage;
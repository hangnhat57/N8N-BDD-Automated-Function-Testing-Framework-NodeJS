import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { browser } from 'protractor';


class BasePagePo {

    constructor(){
        this.browser = browser;
        this.expect = chai.expect;
        chai.use(chaiAsPromised);
    }

}
export default BasePagePo;

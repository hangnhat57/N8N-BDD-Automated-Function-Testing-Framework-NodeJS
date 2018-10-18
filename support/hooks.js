"use strict";
import {setDefaultTimeout} from "cucumber";

const { BeforeAll,Before, After, Status } = require("cucumber");
const conf = require("../config/config").config;
    BeforeAll({timeout: 120*1000}, function() {
        console.log("\n Start executing test suite ....")
    });
    Before(function (){
        return setDefaultTimeout(120 * 1000);
    });
    Before({tags:"@Romans"},function(){
        return browser.get(conf.baseUrl);
    });
    Before({tags:"@AllureScenario or @CucumberScenario or @ProtractorScenario"},function (){
        return browser.get("https://google.com/ncr");
    });

  
    After(function(scenario) {
      if (scenario.result.status === Status.FAILED) {
        const attach = this.attach; // cucumber's world object has attach function which should be used
        return browser.takeScreenshot().then(function(png) {
          const decodedImage = new Buffer(png, "base64");
          return attach(decodedImage, "image/png");
        });
      }
    });



"use strict";
import {    browser } from 'protractor';
import {setDefaultTimeout} from "cucumber";
const sec = 1000;
const { BeforeAll,Before, After, Status } = require("cucumber");
const conf = require("../framework_config/main.config").config;
    BeforeAll({timeout: 120*sec}, async function() {
        console.log("\n Start executing test suite ....")
    });
    Before(function (){
        return browser.manage().window().setSize(1920,1080);
    });
    Before( function (){
        return  setDefaultTimeout(60 * sec);
    });
    Before(async function () {
        return await browser.getCapabilities().
                        then(function (cap) {
                            browser.browserName = cap.map_.get('browserName');
                        });
    });
    Before({tags:"@Romans"}, async function(){
        console.log("Go to romans");
        return await browser.get(conf.baseUrl);
    });
    Before({tags:"@AllureScenario or @CucumberScenario or @ProtractorScenario"}, async function (){
        return await browser.get("https://google.com/ncr");
    });


    After( async function(scenario) {
      if (scenario.result.status === Status.FAILED) {
        const attach = this.attach; // cucumber's world object has attach function which should be used
        return await browser.takeScreenshot().then(function(png) {
          const decodedImage = new Buffer(png, "base64");
          return  attach(decodedImage, "image/png");
        });
      }
      await browser.restart();
    });



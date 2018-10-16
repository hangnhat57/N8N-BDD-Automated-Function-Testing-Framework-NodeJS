require('dotenv').config()
const path = require("path");
const htmlReports = process.cwd() +'/reports/html';
const jsonReports = process.cwd() + "/reports/json";
const browsers = require('./browsers');
const baseUrls = require('./baseUrls')
var dateTime = require('node-datetime');

//const Reporter = require("../support/reporter");

exports.config = {
    seleniumAddress: process.env.SELENIUM_HUB,
    baseUrl: baseUrls[process.env.TEST_ENVIRONMENT],
    chromeOnly: false,
    capabilities: browsers[process.env.BROWSER_NAME],
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: ["../features/*.feature"],
    exclude: "../features/database.feature",
    onPrepare: function() {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        require('babel-register');
    },
    cucumberOpts: {
        strict: true,
        format: ['./support/allure-reporter.js','json:./reports/results.json'],
        require: ["../stepDefinitions/*.js", "../support/*.js"],
        tags: "(@AllureScenario or @CucumberScenario or @ProtractorScenario) and (not @DatabaseTest)"
    },
    plugins: [{
        package: 'protractor-multiple-cucumber-html-reporter-plugin',
        options:{
            automaticallyGenerateReport:true,
            removeExistingJsonReportFile:true,
            displayDuration:true,
            pageTitle:'N8N Automation Test Report',
            reportName:'N8N Automation Test Report',
            pageFooter:'<div align="center"><p>   N8N Automation Test Report</p></div>',
            reportPath:htmlReports,
            jsonDir:jsonReports,
            customData: {
                title: 'Run info',
                data: [
                    {label: 'Project', value: 'TwentyCI '},
                    {label: 'Environment', value: process.env.TEST_ENVIRONMENT.toUpperCase()},
                    {label: 'Execution Start Time', value: dateTime.create().format('H:M d-m-Y')},

                ]
            }
        }
    }]
};

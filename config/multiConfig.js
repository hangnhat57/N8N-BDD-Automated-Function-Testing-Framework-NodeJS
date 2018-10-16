require('dotenv').config()
const htmlReports = process.cwd() +'/reports/html';
const jsonReports = process.cwd() + "/reports/json";
const baseUrls = require('./baseUrls')
var dateTime = require('node-datetime');

exports.config = {
    seleniumAddress: process.env.SELENIUM_HUB,
    baseUrl: baseUrls[process.env.TEST_ENVIRONMENT],
    chromeOnly: false,
    multiCapabilities: [
    {
      browserName: "chrome",
      shardTestFiles: false,
        chromeOptions: {
            args: [ "--headless", "--disable-gpu", "--window-size=1920,1080" ]
        },
        metadata: {
            device: "Macbook Pro 2018",
            platform: {
                name: 'osx',
                version: '10.14'
            }
        }
    },
    {
      browserName: "firefox",
      shardTestFiles: false,
        'moz:firefoxOptions': {
            args: [ "--headless" ]
        },
        metadata: {
            device: 'Dell XPS',
            platform: {
                name: 'windows',
                version: '10'
            }
        }
    }
    ],
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
        format: ['json:./reports/json/cucumber_report.json','./support/allure-reporter.js'],
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

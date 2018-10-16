const path = require("path");
const jsonReports = process.cwd() + "/reports/json";
const Reporter = require("../support/reporter");
const os = require('os');
exports.config = {
    seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    baseUrl: "http://www.google.com",
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
        Reporter.createDirectory(jsonReports);
    },
    cucumberOpts: {
        strict: true,
        format: ['json:./reports/json/cucumber_report.json','./support/allure-reporter.js'],
        require: ["../stepDefinitions/*.js", "../support/*.js"],
        tags: "(@AllureScenario or @CucumberScenario or @ProtractorScenario) and (not @DatabaseTest)"
    },
    onComplete: function () {
        Reporter.createHTMLReport();
    },
    plugins: [{
        package: 'protractor-multiple-cucumber-html-reporter-plugin',
        options:{
            automaticallyGenerateReport:true,
            removeExistingJsonReportFile:true,
            displayDuration:true,
            pageTitle:'N8N Automated Test Reporting',
            reportName:'N8N Automated Test Report',
            pageFooter:'<div><p>N8N Automated Test Report</p></div>',
            customData: {
                title: 'Run info',
                data: [
                    {label: 'Project', value: 'TwentyCI '},
                    {label: 'Environment', value: 'staging'},
                    {label: 'Execution Start Time', value: Date.now().toLocaleString()},

                ]
            }
        }
    }]
};

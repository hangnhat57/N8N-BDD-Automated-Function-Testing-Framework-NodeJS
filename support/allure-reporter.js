var CucumberJSAllureFormatter = require("cucumberjs-allure2-reporter").CucumberJSAllureFormatter;
var AllureRuntime = require("cucumberjs-allure2-reporter").AllureRuntime;

function AllureReporter(options) {
    CucumberJSAllureFormatter.call(this,
        options,
        new AllureRuntime({ resultsDir: "./reports/allure-results" }),
        {});
}
AllureReporter.prototype = Object.create(CucumberJSAllureFormatter.prototype);
AllureReporter.prototype.constructor = AllureReporter;

exports.default = AllureReporter;

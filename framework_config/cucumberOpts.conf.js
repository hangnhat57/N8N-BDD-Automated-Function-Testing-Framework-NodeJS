exports.cucumberOpts = {
    strict: true,
    format: ['pretty','./cucumber_support/allure-reporter.js','json:./reports/results.json'],
    require: ["../features/step_definitions/*.step.js", "../cucumber_support/*.js"],
    tags: "not @ignore"
};
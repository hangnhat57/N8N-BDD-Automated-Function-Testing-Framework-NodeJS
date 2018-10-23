require ('dotenv').config ();
const htmlReports = process.cwd () + '/reports/html';
const jsonReports = process.cwd () + "/reports/json";
let dateTime = require ('node-datetime');
const TEST_ENVIRONMENT = process.env.TEST_ENVIRONMENT || "staging";

exports.plugins = [
	{
		package: 'protractor-multiple-cucumber-html-reporter-plugin',
		options: {
			automaticallyGenerateReport: true,
			removeExistingJsonReportFile: true,
			removeOriginalJsonReportFile: true,
			openReportInBrowser:true,
			displayDuration: true,
			pageTitle: 'N8N Automation Test Report',
			reportName: 'N8N Automation Test Report',
			pageFooter: '<div align="center"><p>N8N Automation Test Report</p></div>',
			reportPath: htmlReports,
			jsonDir: jsonReports,
			customData: {
				title: 'Run info',
				data: [
					{ label: 'Project', value: 'TwentyCI ' },
					{ label: 'Environment', value: TEST_ENVIRONMENT.toUpperCase () },
					{ label: 'Execution Start Time', value: dateTime.create ().format ('H:M d-m-Y') },

				]
			}
		}
	},
	{
		package: 'protractor-testability-plugin'
	}
];

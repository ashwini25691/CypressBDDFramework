const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/cucumber-json',
	reportPath: './reports/cucumberHtmlReport.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '100'
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows',
            version: '10'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'McMakler project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B1.0'},
            {label: 'Execution Start Time', value: 'April 14th 2022, 02:31 PM EST'},
            {label: 'Execution End Time', value: 'April 14th 2022, 02:56 PM EST'}
        ]
    }
});
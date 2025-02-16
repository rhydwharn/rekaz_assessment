const report = require("multiple-cucumber-html-reporter");
const moment = require('moment');
const path = require('path');
const executionStartTime = moment().format('MMMM Do YYYY, h:mm:ss A');
const executionEndTime = moment().add(30, 'minutes').format('MMMM Do YYYY, h:mm:ss A');

// Generate a unique directory name using the current timestamp
const timestamp = new Date().toISOString().replace(/:/g, '-');
const reportDirectory = path.join('./results/html', `Rekaz Report-${timestamp}`);


report.generate({
    jsonDir: './results/json/', // ** Path to the folder containing the cucumber JSON reports **
    reportPath: reportDirectory,
    displayDuration: true, // Show the duration of each test
    displayReportTime: true, // Show the report generation time
    openReportInBrowser: true, // Automatically open the report in the default browser
    pageTitle: 'Rekaz Reigistration Automation Report', // Title for the HTML page
    reportName: `Rekaz Reigistration Automation as at - ${timestamp}`, // Report name
    // customMetadata: true,
    overwrite: false,
 metadata:{
        browser: {
            name: 'chrome',
            version: '131'
        },
        device: 'Test machine',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Neo EMR'},
            {label: 'Release', value: '1.0.0'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: executionStartTime},
            {label: 'Execution End Time', value: executionEndTime}
        ]
    }
});
Feature: New Advertisement

Create New Advertisement
Scenario:  Send Request through API and Validate if that exist in UI
Given Open the Url
And Get No of Rows in Table 
When I Post request through API and validate the response
And Open the Url
Then Row is added

Scenario:  Validate Cancel button functionality

Given Open the Url
And Get No of Rows in Table
When I Add New Addvertisement
When I type Advertisement Name as "McMakler Test Automation Challenge"
And I type Street Name as "123456 Test Automation"
And I type Rooms as "10"
And I type price as "1000"
And click on Cancel button
And Validate Confirm dialog box and click on ok button
Then Row should not be saved

Scenario:  Create a New Advertisement having Active status
Given Open the Url
And Get No of Rows in Table
When I Add New Addvertisement
When I type Advertisement Name as "McMakler Test Automation Challenge"
And I type Street Name as "123456 Test Automation"
And I type Rooms as "10"
And I type price as "1000"
And I check the checkbox
And click on Save button
Then Row is added

Scenario:  Advertisement Name field accepts only 50 charachters
Given Open the Url
And Get No of Rows in Table
When I Add New Addvertisement
And I type Advertisement Name as "McMakler Test Automation Challenge McMakler Test Automation Challenge"
And I type Street Name as "123456 Test Automation"
And I type Rooms as "10"
And I type price as "1000"
Then Max Length reached error is displayed for Advertisement Name Field
And Save button is disabled

Scenario:  Rooms should not accept alphabets
Given Open the Url
And Get No of Rows in Table
When I Add New Addvertisement
And I type Advertisement Name as "McMakler Test Automation Challenge"
And I type Street Name as "123456 Test Automation"
And I type Rooms as "abc"
Then I Validate Room Field ""

Scenario:  Rooms accepts decimal values

Given Open the Url
And Get No of Rows in Table
When I Add New Addvertisement
And I type Advertisement Name as "McMakler Test Automation Challenge"
And I type Street Name as "123456 Test Automation"
And I type Rooms as "1.0"
Then I Validate Room Field "1.0"

Scenario:  Create Advertisment having Inactive Status

Given Open the Url
And Get No of Rows in Table
When I Add New Addvertisement
When I type Advertisement Name as "McMakler Test Automation Challenge"
And I type Street Name as "123456 Test Automation"
And I type Rooms as "10"
And I type price as "1000"
And click on Save button
Then Row is added
And I Validate the Advertisement Status "Inactive"

Scenario:  Validate price field accepts only numbers

Given Open the Url
And Get No of Rows in Table
When I Add New Addvertisement
And I type Advertisement Name as "McMakler Test Automation Challenge"
And I type Street Name as "123456 Test Automation"
And I type Rooms as "1.0"
And I type price as "abcd"
And I check the checkbox
Then I Validate price Field error message

Scenario:  Edit existing Advertisement and Validate street and room are not mandatory Field

Given Open the Url
When I edit existing Advertisement
And I clear the Street Name 
And I clear the Rooms field
And I type price as "2"
And I check the checkbox
And click on Save button
Then Row is saved successfully

Scenario:  Edit existing Advertisement and Cancel the changes

Given Open the Url
When I edit existing Advertisement
And I clear the Street Name 
And I clear the Rooms field
And I clear the price field
And I type price as "2"
And click on Cancel button
And Validate Confirm dialog box and click on cancel button
Then Edit Advertisement page should only be displayed





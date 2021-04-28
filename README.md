Assignment submission by Michael (Mike) Ryan for FE Developer position with Canada Drives - April 2021


**Instructions for running application locally**

Once unzipped, use terminal to navigate into folder ‘mcryan-dashboard-app’
Perform ‘npm install’
Once node modules are installed, then perform ‘npm start’


***Project Notes:***
- Framework/Library used: Reactjs
- 3rd Party CSS used: Bootstrap
- IDE used: VSCode
- Bowser used in developement: Chrome
- Browsers used in testing: Chrome, Firefox, Safari
- Total time approx 8+ hours


***Build Notes:***
- Style sheets for Address, Company, and Contact are empty, but they are there for future use if needed. Import rules for these empty sheets are in App.scss but have been commented out until required.


***Challenges:***
- Having the email link nested inside another link (row container the user info) caused an error, but solution was to take email link out of the flow using absolute positioning,

- I identified that the phone number links would require some more work and use of some regex so that only the actual phone number would be used and not to include any special characters or extensions. I left this out due to time.

- Using the browser back button does not properly re-render the homepage when used instead of the User link on the user details page. This is a known issue when useing React and ReactRouter for navigation, but with more time I would have persued a solution using history object and a conditional to re-render.

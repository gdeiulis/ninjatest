# ninjatest
## STEPS:
### npm install
npm install selenium-webdriver
npm install chromedriver
npm install geckodriver
mocha-simple-html-reporter
npm install --save-dev mocha-simple-html-reporter

RUN:
npm --browser=firefox run desktopTest
npm --browser=chrome run desktopTest
npm --browser=firefox run mobileTest
npm --browser=chrome run mobileTest

const browser = process.env.npm_config_browser;
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('geckodriver');
const loc = require('./utils/locator.js');
const { Builder, By, Key, until, Capabilities } = require('selenium-webdriver');
const url='https://www.ninjacasino.com/'

function locateElement(selector) {
    let el = driver.wait(until.elementLocated(By.css(selector)), 50000);
    return el;
}

describe('Ninja Casino Language Switching', function () {
    before(async function() {
        driver = await new Builder()
        .forBrowser(browser)
        .build();
    });

    it('Language dropdown is shown in the header',  async function() {
        await driver.get(url);
        await locateElement(loc.cookie_consentSel).click();
        await locateElement(loc.langSel);
    
    });

    it('Clicking on the language dropdown the language menu shows up',  async function() {
         await locateElement(loc.langSel).click();
         await locateElement(loc.languageDM);
    
    });

    it('Click on FI reload the application in Suomi',  async function() {
        await locateElement(loc.langSelChild).click();
        await locateElement(loc.langSel);
        driver.getTitle().then(function(title){
          assert.equal(title,loc.titleFI); 
        })
    });

    it('Click on EE reload the application in Suomi',  async function() {
        await locateElement(loc.langSel).click();
        await locateElement(loc.langSelChild).click();
        await locateElement(loc.langSel);
        driver.getTitle().then(function(title){
          assert.equal(title,loc.titleEE); 
        })
        
    });

    it('Click on FI reload the application in Russian',  async function() {
        await locateElement(loc.langSel).click();
        await locateElement(loc.langSelChild2).click();
        await locateElement(loc.langSel);
        driver.getTitle().then(function(title){
          assert.equal(title,loc.titleRU); 
        })
        
    });

    after(() => driver && driver.quit());
})
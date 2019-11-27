const browser = process.env.npm_config_browser;
const assert = require('assert');
const loc = require('./utils/locator.js');
const { Builder, By, Key, until, Capabilities } = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/chrome');

var url='https://www.ninjacasino.com/'

function locateElement(selector) {
    el = driver.wait(until.elementLocated(By.css(selector)), 50000);
    return el;
}

function checkRedirect(pageurl) {
     driver.getCurrentUrl().then(function(currentUrl){
      assert.equal(currentUrl,url+pageurl); 
  })
}

describe('Ninja Casino Main Site Navigation', function () {
    before(async function() {
        driver = await new Builder()
        .forBrowser(browser)
        .setChromeOptions(new Options().setMobileEmulation({ deviceName: 'iPhone 5' }))
        .build();
        if(browser=='firefox') {
          driver.manage().window().setSize(320,700);
        }   
     });
    
    it('Tapping on the burger icon, the following entries are found Home, Games, Ninja Treasures, Promotions and Customer Support;',  async function() {
      await driver.get(url);
      await locateElement(loc.cookie_consentSel).click();
      await locateElement(loc.menuSel).click();
      await locateElement(loc.homeSel);
      await locateElement(loc.gameSel);
      await locateElement(loc.ninjatreasureSel);
      await locateElement(loc.promotionsSel);
      await locateElement(loc.customersuppSel);
    
    });

    it('Tapping on Ninja Treasures redirects to Ninja Treasures page',  async function() {
        await locateElement(loc.ninjatreasureSel).click();
        await checkRedirect('bonus');
        
    });

    it('Tapping on Promotions redirects to Promotions page',  async function() {
      await locateElement(loc.menuSel).click();
      await locateElement(loc.promotionsSel).click();
      await checkRedirect('promotions');
    
    });
    
    it('Tapping on Customer Support redirects to Customer Support page',  async function() {
      await locateElement(loc.menuSel).click();
      await locateElement(loc.customersuppSel).click();
      await checkRedirect('customer-support');
   
    });
    
    it('Tapping on Game, the following categories are found All Games, Slots, Live Casino, Jackpots, Table Games',  async function() {
      await locateElement(loc.menuSel).click();
      await locateElement(loc.gameSel).click();
      await locateElement(loc.allgameSel);
      await locateElement(loc.slotSel);
      await locateElement(loc.livecasinoSel);
      await locateElement(loc.jackpotsSel);
    });

    it('Tapping on All Games redirects to All Games page ',  async function() {
      await locateElement(loc.allgameSel).click();
      await checkRedirect('all-games');
     
    });

    it('Tapping on Slots redirects to Slots page',  async function() {
      await locateElement(loc.menuSel).click();
      await locateElement(loc.gameSel).click();
      await locateElement(loc.slotSel).click();
      await checkRedirect('slots');
     
     });
    
    it('Tapping on Live Casino redirects to Live Casino page',  async function() {
      await locateElement(loc.menuSel).click();
      await locateElement(loc.gameSel).click();
      await locateElement(loc.livecasinoSel).click();
      await checkRedirect('live-casino');
  
    });

    it('Tapping on Jackpots redirects to Jackpots page',  async function() {
      await locateElement(loc.menuSel).click();
      await locateElement(loc.gameSel).click();
      await locateElement(loc.jackpotsSel).click();
      await checkRedirect('jackpot-games');

    });

    it('Tapping on Table Games redirects to Table Games page;',  async function() {
      await locateElement(loc.menuSel).click();
      await locateElement(loc.gameSel).click();
      await locateElement(loc.tablegameSel).click();
      await checkRedirect('casino-games');

    });

   after(() => driver && driver.quit());//
})
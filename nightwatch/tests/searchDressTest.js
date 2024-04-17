const contactUsPage = require('../page-objects/searchDress/searchDressPage');

describe('Search Dress', function() {
    let searchDress;

  
    beforeEach(async function(browser) {
        searchDress = browser.page.searchDress.searchDressPage();  
        browser.navigateTo(searchDress.url)
        
    });
    it('assert on search results when searching for “dress”', function(browser) {
        searchDress.setSearchTextBox(browser)
        searchDress.clickSearchButton(browser)
        searchDress.assertOnEachSearchResult(browser)
    })
    after(browser => browser.end());
    
  });
  
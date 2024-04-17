const inputData = require('./inputData.json') 

const searchCommands = {
    setSearchTextBox(){
      this
        .waitForElementVisible(this.elements.body, 5000)
        .setValue(this.elements.searchTextBox, inputData.searchDressData.searchKeyword)

      this.pause(1000);
      return this; // for command-chaining
    },
    clickSearchButton(){
        this
          .click(this.elements.searchButton)
          .waitForElementVisible(this.elements.productList, 5000)


        this.pause(1000);
        return this; // for command-chaining
    },
    assertOnEachSearchResult(browser){
        browser.elements('css selector', this.elements.productListNames, function (result) {
            result.value.forEach(function(productName) {
                const [Id, productId] = Object.entries(productName)[0];
                browser.elementIdText(productId, function(name){
                    const nameValue = name.value
                    const check = nameValue.toLowerCase().includes('dress')
                        this.assert.ok(check, 'contains "dress"', `"${nameValue}"`);
                });
                
            });
        });

        this.pause(1000);
        return this; // for command-chaining
    }
  };
  
  module.exports = {
    url: inputData.searchDressData.homeUrl,
  
    commands: [
        searchCommands
    ],
  
    elements: {
      searchTextBox: {
        selector: 'input#search_query_top'
      },
      searchButton:{
          selector: 'button[name="submit_search"]'
      },
      body:{
          selector: 'body'
      },
      productList:{
          selector: '.product_list'
      },
      productListNames: {
          selector: '.product_list .product-name'
      }
    }
  };
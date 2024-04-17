const path = require('path');
const inputData = require('./inputData.json') 

const contactCommands = {
    checkContactFormVisible(){
      this
        .waitForElementVisible(this.elements.contactUsForm, 5000)
        .assert.visible(this.elements.contactUsForm, 'Form is visible')
        .assert.titleContains(inputData.contactUsData.title)
        .waitForElementVisible(this.elements.body, 2000);

      this.pause(1000);
      return this; // for command-chaining
    },
    setValidEmail() {
      this
        .setValue(this.elements.email, inputData.contactUsData.validEmail)
        .click(this.elements.clickOnBigLayout)
        .assert.elementPresent(this.elements.validEmailSign);
      
      this.pause(1000);
      return this; // for command-chaining
    },
    setInValidEmail() {
      this
        .setValue(this.elements.email, inputData.contactUsData.inValidEmail)
        .click(this.elements.clickOnBigLayout)
        .assert.elementPresent(this.elements.inValidEmailSign);
      
      this.pause(1000);
      return this; // for command-chaining
    },
    setValidEmailWithSpaces() {
      this
        .setValue(this.elements.email, inputData.contactUsData.emailWithSpaces)
        .click(this.elements.clickOnBigLayout)
        .assert.elementPresent(this.elements.ValidEmailSign);
       // .assert.elementPresent(this.elements.inValidEmailSign);
      
      this.pause(1000);
      return this; // for command-chaining
    },
    assertResponsiveness() {
      this
        .setValue(this.elements.email, '')
        .click(this.elements.clickOnBigLayout)
        .assert.elementNotPresent(this.elements.validEmailSign);
      
      this.pause(1000);
      return this; // for command-chaining
    },
    setCustomerServiceMessage() {
      this
        .click(this.elements.customerServiceSubjectHeading)
        .assert.containsText(this.elements.customerServiceMessage,inputData.contactUsData.customerServiceMessage);        
      
      this.pause(1000);
      return this; // for command-chaining
    },
    setWebMasterMessage() {
      this
        .click(this.elements.webMasterSubjectHeading)
        .assert.containsText(this.elements.webMasterMessage,inputData.contactUsData.webMasterMessage);        
      
      this.pause(1000);
      return this; // for command-chaining
    },
    setMessage() {
      this
        .setValue(this.elements.messageContent, inputData.contactUsData.messageBody)      
      
      this.pause(1000);
      return this; // for command-chaining
    },
    setSpaceMessage() {
      this
        .setValue(this.elements.messageContent, inputData.contactUsData.spaceMessage)      
      
      this.pause(1000);
      return this; // for command-chaining
    },
    clickSend(){
      this
        .click(this.elements.submitMessage)

      this.pause(1000);
      return this; // for command-chaining

    },
    assertFailedInvalidEmail() {
      this
        .assert.elementPresent(this.elements.errorSign)
        .assert.containsText(this.elements.errorTitle,inputData.contactUsData.errorTitle)
        .assert.containsText(this.elements.errorMessage,inputData.contactUsData.invalidEmailErrorMessage);        
      
      this.pause(1000);
      return this; // for command-chaining
    },
    assertFailedEmptyMessage() {
      this
        .assert.elementPresent(this.elements.errorSign)
        .assert.containsText(this.elements.errorTitle,inputData.contactUsData.errorTitle)
        .assert.containsText(this.elements.errorMessage,inputData.contactUsData.invalidMessageErrorMessage);        
      
      this.pause(1000);
      return this; // for command-chaining
    },
    assertFailedEmptySubjectHeading() {
      this
        .assert.elementPresent(this.elements.errorSign)
        .assert.containsText(this.elements.errorTitle,inputData.contactUsData.errorTitle)
        .assert.containsText(this.elements.errorMessage,inputData.contactUsData.invalidSubjectHeadingMessage);        
      
      this.pause(1000);
      return this; // for command-chaining
    },
    assertSuccessFlow() {
      this
      .assert.elementPresent(this.elements.successMessage)
      .assert.containsText(this.elements.successMessage,inputData.contactUsData.successMessage)
        
      this.pause(1000);
      return this; // for command-chaining
    },
    clickHome(){
      this
        .click(this.elements.clickOnHome);


      this.pause(1000)
      return this;
    },
    assertHomePageRedirected() {
      this
        .assert.urlEquals(inputData.contactUsData.homePageUrl);
                
      
      this.pause(1000);
      return this; // for command-chaining
    },
    setAttachFile(){
      this
        .setValue(this.elements.uploadFile, require('path').resolve(inputData.contactUsData.filePath))


      this.pause(1000);
      return this;


    },
    assertAttachedFileExist(){
      this
        .getValue(this.elements.uploadFile, function(output) {
          const outputValue = output.value;
          const filename = path.basename(inputData.contactUsData.filePath);

          this.assert.ok(outputValue.includes(filename));
        });
      
      this.pause(1000);
      return this; // for command-chaining
    }
  };
  
  module.exports = {
    url: inputData.contactUsData.contactUsUrl,
  
    commands: [
      contactCommands
    ],
  
    elements: {
      email: {
        selector: 'input#email'
      },
      submitMessage: {
        selector: 'button#submitMessage > span'
      },
      validEmailSign: {
          selector: '.form-group.form-ok'
      },
      inValidEmailSign: {
        selector: '.form-error.form-group'
      },
      clickOnBigLayout:{
          selector: 'div#columns > div:nth-of-type(3)'
      },
      errorSign:{
        selector: 'div#center_column > .alert.alert-danger',
      },
      errorTitle:{
        selector: '.alert-danger p'
      },
      errorMessage:{
        selector: 'div#center_column li'
      },
      webMasterSubjectHeading:{
        selector: 'select[id="id_contact"] option[value="1"]'
      },
      customerServiceSubjectHeading:{
        selector:'select[id="id_contact"] option[value="2"]'
      },
      customerServiceMessage:{
        selector:'.col-md-3.col-xs-12 > p:nth-of-type(2)'
      },
      webMasterMessage:{
        selector:'.col-md-3.col-xs-12 > p:nth-of-type(3)'
      },
      emptySubjectHeadingMessage:{
        selector:'[class] .desc_contact.unvisible:nth-child(2)'
      },
      subjectHeadingSelector:{
        selector:'select#id_contact'
      },
      messageContent:{
        selector:'textarea#message'
      },
      successMessage:{
        selector:'div#center_column > .alert.alert-success'
      },
      clickOnHome:{
        selector:'.footer_links span'
      },
      uploadFile:{
        selector:'input#fileUpload'
      },
      contactUsForm:{
        selector:'form.contact-form-box'
      },
      contactUsTitle:{
        selector:'div#center_column > .bottom-indent.page-heading'
      },
      body:{
        selector:'body'
      }
  
    }
  };
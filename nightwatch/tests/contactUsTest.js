const contactUsPage = require('../page-objects/contactUs/contactUsPage');

describe('Contact Us', function() {
    let contactUs;

  
    beforeEach(async function(browser) {
        contactUs = browser.page.contactUs.contactUsPage();  
        browser.navigateTo(contactUs.url)
        
    });
    it('assert on contact us page and form are visible', function() {
        contactUs.checkContactFormVisible()
    }),
    it('assert on check box when entering a valid email', function() {
        contactUs.setValidEmail()
    }),
    it('assert on check box when entering an invalid email', function() {
        contactUs.setInValidEmail()
    }),
    it('assert on customer service message', function() {
        contactUs.setCustomerServiceMessage()
    }),
    it('assert on web master message', function() {
        contactUs.setWebMasterMessage()
    }),
    it('assert on error message when sending with empty email', function() {
        contactUs.clickSend();
        contactUs.assertFailedInvalidEmail()
    }),
    it('assert on error message when sending with an invalid email', function() {
        contactUs.setInValidEmail();
        contactUs.clickSend();
        contactUs.assertFailedInvalidEmail()
    }),
    it('assert on empty message error with a valid email', function() {
        contactUs.setValidEmail()
        contactUs.clickSend()
        contactUs.assertFailedEmptyMessage()
    }),
    it('assert on empty subject heading error with a valid email and message', function() {
        contactUs.setValidEmail()
        contactUs.setMessage()
        contactUs.clickSend()
        contactUs.assertFailedEmptySubjectHeading()
    }),
    it('assert on empty email and subject heading error with a message', function() {
        contactUs.setMessage()
        contactUs.clickSend()
        contactUs.assertFailedInvalidEmail()
    }),
    it('assert on empty email error with a message and subject heading', function() {
        contactUs.setMessage()
        contactUs.setCustomerServiceMessage()
        contactUs.clickSend()
        contactUs.assertFailedInvalidEmail()
    }),
    it('assert on empty email and message error with subject heading', function() {
        contactUs.setCustomerServiceMessage()
        contactUs.clickSend()
        contactUs.assertFailedInvalidEmail()
    }),
    it('assert on empty Message error with a valid email and subject heading', function() {
        contactUs.setValidEmail()
        contactUs.setCustomerServiceMessage()
        contactUs.clickSend()
        contactUs.assertFailedEmptyMessage()
    }),
    it('assert on customer service subject heading with a valid email and message and ensuring when clicking on home redirects to home page', function() {
        contactUs.setValidEmail()
        contactUs.setMessage()
        contactUs.setCustomerServiceMessage()
        contactUs.clickSend()
        contactUs.assertSuccessFlow()
        contactUs.clickHome()
        contactUs.assertHomePageRedirected()
    }),
    it('assert on web master subject heading with a valid email and message and ensuring when clicking on home redirects to home page', function() {
        contactUs.setValidEmail()
        contactUs.setMessage()
        contactUs.setWebMasterMessage()
        contactUs.clickSend()
        contactUs.assertSuccessFlow()
        contactUs.clickHome()
        contactUs.assertHomePageRedirected()
    }),
    it('assert on web master subject heading with a valid email and message with attached file and ensuring when clicking on home redirects to home page', function() {
        contactUs.setValidEmail()
        contactUs.setMessage()
        contactUs.setWebMasterMessage()
        contactUs.setAttachFile()
        contactUs.assertAttachedFileExist()
        contactUs.clickSend()
        contactUs.assertSuccessFlow()
        contactUs.clickHome()
        contactUs.assertHomePageRedirected()
    }),
    it('assert fail with a valid email with subject heading selected and message contain only spaces', function() {
        contactUs.setValidEmail()
        contactUs.setSpaceMessage()
        contactUs.setCustomerServiceMessage()
        contactUs.clickSend()
        contactUs.assertFailedEmptyMessage()
    }),
    it('assert fail with a valid email contains spaces at the front or at the end with subject heading selected and valid message', function() {
        contactUs.setValidEmailWithSpaces()
    }),
    it('assert fail on responsiveness of email validity sign', function() {
        contactUs.setValidEmail()
        contactUs.assertResponsiveness()
    })
   
    after(browser => browser.end());
    
  });
  
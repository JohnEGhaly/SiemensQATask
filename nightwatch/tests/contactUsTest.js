const contactUsPage = require('../page-objects/contactUs/contactUsPage');

describe('Contact Us', function() {
    let contactUs;

  
    beforeEach(async function(browser) {
        contactUs = browser.page.contactUs.contactUsPage();  
        browser.navigateTo(contactUs.url)
        
    });
    it('assert on contact us page and form are visible', function(browser) {
        contactUs.checkContactFormVisible(browser)
    }),
    it('assert on check box when entering a valid email', function(browser) {
        contactUs.setValidEmail(browser)
    }),
    it('assert on check box when entering an invalid email', function(browser) {
        contactUs.setInValidEmail(browser)
    }),
    it('assert on customer service message', function(browser) {
        contactUs.setCustomerServiceMessage(browser)
    }),
    it('assert on web master message', function(browser) {
        contactUs.setWebMasterMessage(browser)
    }),
    it('assert on error message when sending with empty email', function(browser) {
        contactUs.clickSend(browser);
        contactUs.assertFailedInvalidEmail(browser)
    }),
    it('assert on error message when sending with an invalid email', function(browser) {
        contactUs.setInValidEmail(browser);
        contactUs.clickSend(browser);
        contactUs.assertFailedInvalidEmail(browser)
    }),
    it('assert on empty message error with a valid email', function(browser) {
        contactUs.setValidEmail(browser)
        contactUs.clickSend(browser)
        contactUs.assertFailedEmptyMessage(browser)
    }),
    it('assert on empty subject heading error with a valid email and message', function(browser) {
        contactUs.setValidEmail(browser)
        contactUs.setMessage(browser)
        contactUs.clickSend(browser)
        contactUs.assertFailedEmptySubjectHeading(browser)
    }),
    it('assert on empty email and subject heading error with a message', function(browser) {
        contactUs.setMessage(browser)
        contactUs.clickSend(browser)
        contactUs.assertFailedInvalidEmail(browser)
    }),
    it('assert on empty email error with a message and subject heading', function(browser) {
        contactUs.setMessage(browser)
        contactUs.setCustomerServiceMessage(browser)
        contactUs.clickSend(browser)
        contactUs.assertFailedInvalidEmail(browser)
    }),
    it('assert on empty email and message error with subject heading', function(browser) {
        contactUs.setCustomerServiceMessage(browser)
        contactUs.clickSend(browser)
        contactUs.assertFailedInvalidEmail(browser)
    }),
    it('assert on empty Message error with a valid email and subject heading', function(browser) {
        contactUs.setValidEmail(browser)
        contactUs.setCustomerServiceMessage(browser)
        contactUs.clickSend(browser)
        contactUs.assertFailedEmptyMessage(browser)
    }),
    it('assert on customer service subject heading with a valid email and message and ensuring when clicking on home redirects to home page', function(browser) {
        contactUs.setValidEmail(browser)
        contactUs.setMessage(browser)
        contactUs.setCustomerServiceMessage(browser)
        contactUs.clickSend(browser)
        contactUs.assertSuccessFlow(browser)
        contactUs.clickHome(browser)
        contactUs.assertHomePageRedirected(browser)
    }),
    it('assert on web master subject heading with a valid email and message and ensuring when clicking on home redirects to home page', function(browser) {
        contactUs.setValidEmail(browser)
        contactUs.setMessage(browser)
        contactUs.setWebMasterMessage(browser)
        contactUs.clickSend(browser)
        contactUs.assertSuccessFlow(browser)
        contactUs.clickHome(browser)
        contactUs.assertHomePageRedirected(browser)
    }),
    it('assert on web master subject heading with a valid email and message with attached file and ensuring when clicking on home redirects to home page', function(browser) {
        contactUs.setValidEmail(browser)
        contactUs.setMessage(browser)
        contactUs.setWebMasterMessage(browser)
        contactUs.setAttachFile(browser)
        contactUs.assertAttachedFileExist(browser)
        contactUs.clickSend(browser)
        contactUs.assertSuccessFlow(browser)
        contactUs.clickHome(browser)
        contactUs.assertHomePageRedirected(browser)
    }),
    it('assert fail with a valid email with subject heading selected and message contain only spaces', function(browser) {
        contactUs.setValidEmail(browser)
        contactUs.setSpaceMessage(browser)
        contactUs.setCustomerServiceMessage(browser)
        contactUs.clickSend(browser)
        contactUs.assertFailedEmptyMessage(browser)
    }),
    it('assert fail with a valid email contains spaces at the front or at the end with subject heading selected and valid message', function(browser) {
        contactUs.setValidEmailWithSpaces(browser)
        //contactUs.setMessage(browser)
        //contactUs.setCustomerServiceMessage(browser)
        //contactUs.clickSend(browser)
       // contactUs.assertFailedInvalidEmail(browser)
    }),
    it('assert fail on responsiveness of email validity sign', function(browser) {
        contactUs.setValidEmail(browser)
        contactUs.assertResponsiveness(browser)
    })
   
    after(browser => browser.end());
    
  });
  
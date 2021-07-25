import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

// npm test

describe('Auth', () => {
    beforeEach(() => {
        LoginPage.open();
    })

    afterEach(() => {
        browser.execute('window.localStorage.clear()')
    })

    it('TC-01 should login with valid credentials',  () => {
        LoginPage.setLogin('skyvka.anton@gmail.com');
        LoginPage.setPassword('149pasv');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });

    it('TC-02 submit button is disabled if no login and password provided',  () => {
        LoginPage.submitButtonIsDisabled();
    });

    it('TC-03 auth fails if invalid credentials provided',  () => {
        LoginPage.setLogin('hjhklds@iuiui.com');
        LoginPage.setPassword('01010102');
        LoginPage.clickSubmitButton();
        LoginPage.errorToastAppeared();
    });

    it('TC-04 login input is required',  () => {
        LoginPage.setLogin('example');
        LoginPage.emptyLoginInput();
        LoginPage.loginRequiredError();
    });

});



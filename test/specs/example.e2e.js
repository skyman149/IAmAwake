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

    it('should login with valid credentials',  () => {
        LoginPage.setLogin('skyvka.anton@gmail.com');
        LoginPage.setPassword('149pasv');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });

    it('submit button is disabled if no login and password provided',  () => {
        LoginPage.submitButtonIsDisabled();
    });

    it('auth fails if invalid credentials provided',  () => {
        LoginPage.setLogin('hjhklds@iuiui.com');
        LoginPage.setPassword('01010102');
        LoginPage.clickSubmitButton();
        LoginPage.errorToastAppeared();
    });

});



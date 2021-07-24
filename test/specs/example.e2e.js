import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

// npm test

describe('Auth', () => {
    it('should login with valid credentials',  () => {
        LoginPage.open();
        LoginPage.setLogin('skyvka.anton@gmail.com');
        LoginPage.setPassword('149pasv');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });
});



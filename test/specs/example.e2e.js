import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Auth', () => {
    it('should login with valid credentials',  () => {
        LoginPage.open();
        LoginPage.setLogin('skyvka.anton@gmail.com');
        //browser.pause(2000);
        LoginPage.setPassword('149pasv');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });
});



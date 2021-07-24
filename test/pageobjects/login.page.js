import Page from './page';

class LoginPage extends Page {

    get inputUsername () { return $('#normal_login_email'); }
    get inputPassword () { return $('#normal_login_password'); }
    get buttonSubmit () { return $('.login-form-button'); }
    get errorToast () { return $('.ant-notification-notice-message');}

    setLogin (email) {
        this.inputUsername.setValue(email); // this -> обращаемся к текущему обьэкту (inputUsername)
    }

    setPassword (password) {
        this.inputPassword.setValue(password);
    }

    clickSubmitButton () {
        this.buttonSubmit.click();
    }

    submitButtonIsDisabled () {
        expect(this.buttonSubmit).toBeDisabled();
    }

    errorToastAppeared () {
        expect(this.errorToast).toBeDisplayed();
    }

    open () {
        return super.open('/user/login');
    }
}

export default new LoginPage();

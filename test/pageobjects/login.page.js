import Page from './page';

class LoginPage extends Page {

    get inputUsername () { return $('#normal_login_email'); }
    get inputPassword () { return $('#normal_login_password'); }
    get btnSubmit () { return $('.login-form-button'); }

    setLogin (email) {
        this.inputUsername.setValue(email); // this -> обращаемся к текущему обьэкту (inputUsername)
    }

    setPassword (password) {
        this.inputPassword.setValue(password);
    }

    clickSubmitButton () {
        this.buttonSubmit.click();
    }

    open () {
        return super.open('/user/login');
    }
}

export default new LoginPage();

export default class Page {
    open (path) {
        return browser.url(path); // this will be added to base URL
    }
    // below method of clearing the input field
    clearInput(element){
        const value = element.getValue(); // we got what is inside of field (ex. "skyvka.anton@gmail.com")
        for (let i = 0; i < value.length; i++) {
            element.keys(['Backspace']); //
        }
    }

}

export default class Page {
    open (path) {
        return browser.url(path); // this will be added to base URL
    }
}

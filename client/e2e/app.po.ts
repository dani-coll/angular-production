import { browser, by, element, until } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  search(searchText) {
    return browser.get('/user/dani7cl');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  test() {
    browser.driver.wait(until.elementLocated(by.css('app-user-detail .name a')));
    return element(by.css('app-user-detail .name a')).getText();
  }
}

import { NgdemoPage } from './app.po';

describe('ngdemo App', function() {
  let page: NgdemoPage;

  beforeEach(() => {
    page = new NgdemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

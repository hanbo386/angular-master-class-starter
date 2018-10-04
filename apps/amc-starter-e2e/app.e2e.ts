import { AppPage } from './app.po';

describe('contacts App', function() {
  let page: AppPagePage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('contacts works!');
  });
});

import { BoodschappenFrontendPage } from './app.po';

describe('boodschappen-frontend App', () => {
  let page: BoodschappenFrontendPage;

  beforeEach(() => {
    page = new BoodschappenFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

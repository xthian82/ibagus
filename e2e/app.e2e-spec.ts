import { IbagusPage } from './app.po';

describe('ibagus App', () => {
  let page: IbagusPage;

  beforeEach(() => {
    page = new IbagusPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

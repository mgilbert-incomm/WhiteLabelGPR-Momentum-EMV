import { ErewardsPage } from './app.po';

describe('momentum App', () => {
  let page: ErewardsPage;

  beforeEach(() => {
    page = new ErewardsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { NinjasQuestCliPage } from './app.po';

describe('ninjas-quest-cli App', () => {
  let page: NinjasQuestCliPage;

  beforeEach(() => {
    page = new NinjasQuestCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

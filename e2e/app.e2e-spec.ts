import { GithubSEOPage } from './app.po';

describe('github-seo App', () => {
  let page: GithubSEOPage;

  beforeEach(() => {
    page = new GithubSEOPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

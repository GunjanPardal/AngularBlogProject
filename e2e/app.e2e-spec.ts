import { BlogProjectPage } from './app.po';

describe('blog-project App', () => {
  let page: BlogProjectPage;

  beforeEach(() => {
    page = new BlogProjectPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

import PageObject from '../PageObject';

class ArticlePageObject extends PageObject {
  url = '/#/login';

  get emailField() {
    return cy.getByDataCy('email-sign-in');
  }

  get passwordField() {
    return cy.getByDataCy('password-sign-in');
  }

  get signInBtn() {
    return cy.getByDataCy('sign-in-btn');
  }

  get navNewArticle() {
    return cy.getByDataCy('nav-new-article');
  }

  get articleTitle() {
    return cy.getByDataCy('article-title-text');
  }

  get articleBio() {
    return cy.getByDataCy('article-bio-text');
  }

  get articleBody() {
    return cy.getByDataCy('article-body-text');
  }

  get articleTag() {
    return cy.getByDataCy('article-tag-item');
  }

  get articlePublishBtn() {
    return cy.getByDataCy('article-publish-btn');
  }

  get createdArticleTitle() {
    return cy.getByDataCy('article-h1-title');
  }

  get articleEditorBtn() {
    return cy.getByDataCy('article-editor-btn');
  }

  get articleDeleteBtn() {
    return cy.getByDataCy('article-delete-btn');
  }

  login(email, password) {
    this.emailField.type(email);
    this.passwordField.type(password);
    this.signInBtn.click();
  }

  typeNewArticle({ title, description: bio, body, tag }) {
    this.articleTitle.should('be.visible').clear().type(title);
    this.articleBio.should('be.visible').clear().type(bio);
    this.articleBody.should('be.visible').clear().type(body);
    this.articleTag.should('be.visible').clear().type(`${tag}{enter}`);
    this.articlePublishBtn.should('be.visible').click();
  }
}

export default ArticlePageObject;

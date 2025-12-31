import PageObject from '../PageObject';

class SettingsPageObject extends PageObject {
  url = '/#/settings';

  get emailField() {
    return cy.getByDataCy('email-sign-in');
  }

  get passwordField() {
    return cy.getByDataCy('password-sign-in');
  }

  get signInBtn() {
    return cy.getByDataCy('sign-in-btn');
  }

  get navSettingsBtn() {
    return cy.getByDataCy('nav-settings');
  }

  get userSettingsTitle() {
    return cy.getByDataCy('user-settings-title');
  }

  get userNameField() {
    return cy.getByDataCy('user-username');
  }

  get userBioField() {
    return cy.getByDataCy('user-bio');
  }

  get userEmailField() {
    return cy.getByDataCy('user-email');
  }

  get userPasswordField() {
    return cy.getByDataCy('user-password');
  }

  get userUpdateButton() {
    return cy.getByDataCy('user-btn-update');
  }

  get userLogoutBtn() {
    return cy.getByDataCy('user-btn-logout');
  }

  get updatedMessage() {
    return cy.get('.swal-title');
  }

  get swalButton() {
    return cy.get('.swal-button');
  }

  login(email, password) {
    this.emailField.type(email);
    this.passwordField.type(password);
    this.signInBtn.click();
  }

  updateField(fieldElement, value) {
    fieldElement.clear().type(value);
    this.userUpdateButton.click();
  }
}

export default SettingsPageObject;

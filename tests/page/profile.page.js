const elements = require('./elements');

class ProfilePage {
  async getConfirmationMessage() {
    return await $(elements.confirmationMessage);
  }

  async open() {
    await browser.url('https://trello.com/u/testingwdio066/boards');
  }

  async clickProfileButton() {
    const profileButton = await $(elements.profileButton);
    await profileButton.click();
  }

  async clickEditProfileButton() {
    const editButton = await $(elements.editProfileButton);
    await editButton.click();
  }

  async enterName(name) {
    const nameInput = await $(elements.nameInput);
    await nameInput.setValue(name);
  }

  async clickSaveButton() {
    const saveButton = await $(elements.saveButton);
    await saveButton.click();
  }
}

module.exports = new ProfilePage();

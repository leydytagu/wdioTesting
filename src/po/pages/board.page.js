const BasePage = require("./base.page");

class BoardPage extends BasePage {
  constructor() {
    super('https://trello.com/');
  }

  get workspaceExample() {
    return $('[title="Example"]');
  }

  get showMenuField() {
    return $('[aria-label="Mostrar menú"]');
  }

  get closeWorkSpaceButton() {
    return $('[data-testid="RemoveIcon"]');
  }

  get popoverCloseBoardConfirmButton() {
    return $('[data-testid="popover-close-board-confirm"]');
  }

  get closeBoardDeleteBoardButton() {
    return $('[data-testid="close-board-delete-board-button"]');
  }

  get closeBoardDeleteBoardConfirmButton() {
    return $('[data-testid="close-board-delete-board-confirm-button"]');
  }

  get createBoardTitleField() {
    return $('[data-testid="create-board-title-input"]');
  }

  get boardNameDisplayField() {
    return $('[data-testid="board-name-display"]');
  }

  get headerCreateMenuButton() {
    return $('[data-testid="header-create-menu-button"]');
  }

  get headerCreateBoardButton() {
    return $('[data-testid="header-create-board-button"]');
  }

  get createBoardSubmitButton() {
    return $('[data-testid="create-board-submit-button"]');
  }

  async enterCreateBoardTitle(title) {
    await this.createBoardTitleField.setValue(title);
  }

  async clickHeaderCreateMenuButton() {
    await this.headerCreateMenuButton.click();
  }

  async clickHeaderCreateBoardButton() {
    await this.headerCreateBoardButton.click();
  }

  async clickCreateBoardSubmitButton() {
    await this.createBoardSubmitButton.click();
  }

  async clickWorkspaceExample() {
    await this.workspaceExample.click();
  }

  async clickShowMenuField() {
    await this.showMenuField.click();
  }

  async clickCloseBoardButton() {
    await this.closeWorkSpaceButton.click();
  }

  async clickCloseBoardConfirmButton() {
    await this.popoverCloseBoardConfirmButton.click();
  }

  async clickDeleteBoardButton() {
    await this.closeBoardDeleteBoardButton.click();
  }

  async clickConfirmDeleteBoardButton() {
    await this.closeBoardDeleteBoardConfirmButton.click();
  }
}

module.exports = BoardPage;

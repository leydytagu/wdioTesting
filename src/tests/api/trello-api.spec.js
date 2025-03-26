const apiHelper = require('../../configs/utils/helpers/apiHelper');
const { expect } = require('chai');

describe.only('Trello API Tests', () => {
  let boardId;

  it('Should create a board in Trello', async () => {
    const board = await apiHelper.createBoard('TestBoard');
    boardId = board.id;
    expect(board).to.have.property('id');
    expect(board.name).to.equal('TestBoard');
  });

  it('Should retrieve a board from Trello', async () => {
    const board = await apiHelper.getBoard(boardId);
    expect(board.id).to.equal(boardId);
    expect(board).to.have.property('name');
  });

  it('Should update the board name', async () => {
    const updatedBoard = await apiHelper.updateBoard(boardId, 'UpdatedBoard');
    expect(updatedBoard.name).to.equal('UpdatedBoard');
  });

  it('Should delete the board', async () => {
    const response = await apiHelper.deleteBoard(boardId);
    expect(response).to.be.an('object');
  });
});
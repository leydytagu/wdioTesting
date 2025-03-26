const axios = require('axios');
const { BASE_URL, TRELLO_API_KEY, TRELLO_TOKEN } = require("../../endpoints");

class ApiHelper {
  constructor() {
    this.baseUrl = BASE_URL || 'https://api.trello.com/1/';
    this.apiKey = TRELLO_API_KEY;
    this.token = TRELLO_TOKEN;
  }

  async createBoard(name) {
    const response = await axios.post(`${this.baseUrl}boards/`, null, {
      params: {
        name,
        key: this.apiKey,
        token: this.token
      }
    });
    return response.data;
  }

  async getBoard(boardId) {
    const response = await axios.get(`${this.baseUrl}boards/${boardId}`, {
      params: {
        key: this.apiKey,
        token: this.token
      }
    });
    return response.data;
  }

  async updateBoard(boardId, newName) {
    const response = await axios.put(`${this.baseUrl}boards/${boardId}`, null, {
      params: {
        name: newName,
        key: this.apiKey,
        token: this.token
      }
    });
    return response.data;
  }

  async deleteBoard(boardId) {
    const response = await axios.delete(`${this.baseUrl}boards/${boardId}`, {
      params: {
        key: this.apiKey,
        token: this.token
      }
    });
    return response.data;
  }
}

module.exports = new ApiHelper();

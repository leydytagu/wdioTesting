const LoginPage = require('./login.page');
const BoardPage = require('./board.page');
const ProfilePage = require('./profile.page');
const SignupPage = require('./signup.page');

/**
 * @param name {'login' | 'board' | 'profile' | 'signup'}
 * @returns {LoginPage|BoardPage|ProfilePage|SignupPage}
 */
function page(name) {
  const items = {
    login: new LoginPage(),
    board: new BoardPage(),
    profile: new ProfilePage(),
    signup: new SignupPage()
  };
  return items[name.toLowerCase()];
}

module.exports = {
  LoginPage,
  BoardPage,
  ProfilePage,
  SignupPage,
  page
};

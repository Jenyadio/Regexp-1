export default class Validator {

  validateUsername(login) {
    this.login = login;
    return /^[^\d_-][\w-]+[^\d_-]$/.test(this.login) && !/\d{3,}/.test(this.login);
  };
}
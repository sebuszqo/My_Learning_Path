export class User {
  private _email: string | null = null;

  get email(): string | null {
    return this._email;
  }

  set email(newEmail: string) {
    this._email = newEmail;
  }

  private _loggedIn = false;

  get loggedIn(): boolean {
    return this._loggedIn;
  }

  set loggedIn(isLoggedIn) {
    this._loggedIn = isLoggedIn;
  }

  login(email: string, password: string): boolean {
    if (password === "1234") {
      this.loggedIn = true;
      this.email = email;
      return true;
    }
    return false;
  }
}

export class User {
  get id(): number {
    return this._id;
  }

  get firstname(): string {
    return this._firstname;
  }

  get lastname(): string {
    return this._lastname;
  }

  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }

  get color(): string {
    return this._color;
  }

  // tslint:disable-next-line:variable-name
  constructor(
    private _id: number,
    private _firstname: string,
    private  _lastname: string,
    private _email: string,
    private _password: string,
    private _color: string) {}

  toJson(): any {
    return {
      id: this.id,
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      color: this.color
    };
  }
}

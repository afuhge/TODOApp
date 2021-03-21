import {User} from './user';

export class Task {
  // tslint:disable-next-line:variable-name
  constructor(private _id: number, private name: string, private  date: string,  private assignees: User[]) {
  }
  public get id(): number {
    return this._id;
  }
}

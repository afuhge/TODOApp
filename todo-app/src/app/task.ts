import {User} from './user';

export interface Task {
  id: number;
  name: string;
  date: string;
  assignees: User[];
}

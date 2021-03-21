import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';
import {Task} from './task';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements  InMemoryDbService {
    createDb(){
      const users = [
        new User(1, 'Annika', 'Fuhge', 'a.fuhge@blah.com', '12345', 'green'),
        new User(2, 'Anni', 'fuh', 'a.fuhge@blah.com', '12345', 'blue'),
        new User(3, 'Anni3', 'fuu', 'a.fuhge@blah.com', '12345', 'red'),
        new User(4, 'Annika', 'fu', 'a.fuhge@blah.com', '12345', 'yellow'),
      ];

      const tasks = [
        new Task(1, 'wash clothes', '20.03.2021', null),
        new Task(2, 'do dishes', '20.03.2021', null),
        new Task(3, 'clean rome', '20.03.2021', null),
      ];
      return { tasks, users};
    }

    genUserId(users: User[]): number {
      return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
    }

  genTaskId(tasks: Task[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(user => user.id)) + 1 : 1;
  }
}

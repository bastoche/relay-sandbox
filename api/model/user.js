// @flow

export opaque type UserId: string = string;

export const toUserId = (id: string): UserId => id;

export class User {
  id: UserId;
  name: string;

  constructor(id: UserId, name: string) {
    this.id = id;
    this.name = name;
  }
}

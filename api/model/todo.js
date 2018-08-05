// @flow

export opaque type TodoId: string = string;

export const toTodoId = (id: string): TodoId => id;

export class Todo {
  id: TodoId;
  text: string;
  complete: boolean;

  constructor(text: string, complete: boolean) {
    this.text = text;
    this.complete = complete;
  }
}

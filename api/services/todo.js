// @flow

import { Todo, toTodoId } from "../model/todo";
import type { TodoId } from "../model/todo";
import type { UserId } from "../model/user";

const todosById: { [TodoId]: Todo } = {};
const todoIdsByUser: { [UserId]: Array<TodoId> } = {};

let nextTodoId = 0;
export function addTodo(userId: UserId, todo: Todo) {
  todo.id = toTodoId(`${nextTodoId++}`);
  todosById[todo.id] = todo;
  if (!todoIdsByUser[userId]) {
    todoIdsByUser[userId] = [];
  }
  todoIdsByUser[userId].push(todo.id);
  return todo.id;
}

export function getTodo(todoId: TodoId) {
  return todosById[todoId];
}

export function getTodos(userId: UserId) {
  const todoIds = todoIdsByUser[userId];
  if (todoIds) {
    return todoIds.map(id => todosById[id]);
  }
  return [];
}

export function changeTodoStatus(todoId: TodoId, complete: boolean) {
  const todo = getTodo(todoId);
  todo.complete = complete;
}

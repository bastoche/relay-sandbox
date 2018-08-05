// @flow
import { User } from "../model/user";
import type { UserId } from "../model/user";

const usersById: { [UserId]: User } = {};

export function getUser(userId: UserId) {
  return usersById[userId];
}

export function addUser(user: User) {
  usersById[user.id] = user;
}

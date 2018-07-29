// @flow
import { User } from "./user";

const VIEWER_ID = "me";

const viewer = new User(VIEWER_ID, "Bobby");

export function getUser(id: string) {
  if (id === VIEWER_ID) {
    return viewer;
  }
  return null;
}

export function getViewer() {
  return getUser(VIEWER_ID);
}

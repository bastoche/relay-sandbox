// @flow

export class User {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

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

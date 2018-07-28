// @flow

export class User {
  id: string;
}

const VIEWER_ID = "me";

const viewer = new User();
viewer.id = VIEWER_ID;

const usersById = {
  [VIEWER_ID]: viewer
};

export function getViewer() {
  return getUser(VIEWER_ID);
}

export function getUser(id: string) {
  return usersById[id];
}

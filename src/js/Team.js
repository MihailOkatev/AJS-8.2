import { Character } from './Character';
import { ErrorRepository } from './ErrorRepository';
const e = new ErrorRepository();

// eslint-disable-next-line import/prefer-default-export
export class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (character instanceof Character === false) {
      throw new Error(e.tranlsate(403));
    }
    if (this.members.has(character)) {
      throw new Error(e.tranlsate(111));
    }
    this.members.add(character);
  }

  addAll(...rest) {
    rest.forEach((item) => this.members.add(item));
  }

  toArray() {
    return Array.from(this.members);
  }
}

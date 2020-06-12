// eslint-disable-next-line import/prefer-default-export
export class ErrorRepository {
  constructor() {
    this.storage = new Map();
    this.storage.set(403, 'переданный параметр не принадлежит к классу Character');
    this.storage.set(111, 'персонаж уже состоит в команде');
  }

  tranlsate(code) {
    if (this.storage.has(code)) {
      return this.storage.get(code);
    }
    return 'Unknown error';
  }
}

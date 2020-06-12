import { ErrorRepository } from '../ErrorRepository';


test('return переданный параметр не принадлежит к классу Character', () => {
  const e = new ErrorRepository();
  const result = e.tranlsate(403);

  expect(result).toBe('переданный параметр не принадлежит к классу Character');
});

test('return персонаж уже состоит в команде', () => {
  const e = new ErrorRepository();
  const result = e.tranlsate(111);

  expect(result).toBe('персонаж уже состоит в команде');
});

test('return unknown error', () => {
  const e = new ErrorRepository();
  const result = e.tranlsate(555);

  expect(result).toBe('Unknown error');
});


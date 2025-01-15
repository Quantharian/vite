import { add } from './services';

test('Patata', () => {
    expect(add(0, 1)).toBe(1);
});
test('Patata', () => {
    expect(add(1, -2)).toBe(-1);
});
test('Patata', () => {
    expect(add(1.5, 3.4)).toBe(4.9);
});

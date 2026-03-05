import { GraphicalHelper } from './graphical-helper';

describe('GraphicalHelper', () => {
  it('should create an instance', () => {
    expect(new GraphicalHelper()).toBeTruthy();
  });

  describe('computeOffset', () => {

    const cases: Array<[number, number, number]> = [
      // length 1
      [0, 1, 0],

      // length 2
      [0, 2, -0.5],
      [1, 2, 0.5],

      // length 3
      [0, 3, -1],
      [1, 3, 0],
      [2, 3, 1],

      // length 4
      [0, 4, -1.5],
      [1, 4, -0.5],
      [2, 4, 0.5],
      [3, 4, 1.5],
    ];

    cases.forEach(([index, length, expected]) => {
      it(`index=${index}, length=${length} → ${expected}`, () => {
        expect(GraphicalHelper.computeOffset(index, length)).toBe(expected);
      });
    });
  });
});


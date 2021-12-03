import { filterByNameAndPower, sortBy } from '../utils/general';

describe('filterByNameAndPower', () => {
  it('should return empty array if no rows', () => {
    const rows = [];
    const filter = 'test';
    const result = filterByNameAndPower(rows, filter);
    expect(result).toEqual([]);
  });

  it("should return argument 'rows' when not given filter input", () => {
    const rows = [{ name: 'test', power: 'test' }];
    const filter = '';
    const result = filterByNameAndPower(rows, filter);
    expect(JSON.stringify(result)).toEqual(JSON.stringify(rows));
  });

  it('should return correct rows if filter matches', () => {
    const rows = [
      { name: 'test', power: 'test' },
      { name: 'test2', power: 'test2' }
    ];
    const filter = 'test2';
    const result = filterByNameAndPower(rows, filter);
    const expectedRes = [{ name: 'test2', power: 'test2' }];
    expect(result).toEqual(expectedRes);
  });

  it('should return empty array if filter does not match', () => {
    const rows = [{ name: 'test', power: 'test' }];
    const filter = 'test2';
    const result = filterByNameAndPower(rows, filter);
    expect(result).toEqual([]);
  });
});

describe('sortBy', () => {
  it('should return empty array if no rows', () => {
    const rows = [];
    const result = sortBy(rows, 'power');
    expect(result).toEqual([]);
  });

  it('should return rows sorted by selected column', () => {
    const rows = [
      { name: 'b', power: 'test2' },
      { name: 'a', power: 'test' },
      { name: 'c', power: 'test3' }
    ];
    let result = sortBy(rows, 'power');
    expect(result).toEqual(rows.sort((a, b) => a.power.localeCompare(b.power)));
    result = sortBy(rows, 'name');
    expect(result).toEqual(rows.sort((a, b) => a.name.localeCompare(b.name)));
  });
});

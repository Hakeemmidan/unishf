import { filterByNameAndPower, sortBy } from '../utils/main';

describe('filterByNameAndPower', () => {
  it('should return empty array if no rows', () => {
    const rows = [];
    const filter = 'test';
    const result = filterByNameAndPower(rows, filter);
    expect(result).toEqual([]);
  });

  it('should return empty array if no filter', () => {
    const rows = [{ name: 'test', power: 'test' }];
    const filter = '';
    const result = filterByNameAndPower(rows, filter);
    expect(result).toEqual([]);
  });

  it('should return rows if filter matches', () => {
    const rows = [{ name: 'test', power: 'test' }];
    const filter = 'test';
    const result = filterByNameAndPower(rows, filter);
    expect(result).toEqual(rows);
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

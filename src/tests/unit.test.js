import { filterByNameAndPower, sortByPower } from '../utils/main';

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

describe('sortByPower', () => {
  it('should return empty array if no rows', () => {
    const rows = [];
    const result = sortByPower(rows);
    expect(result).toEqual([]);
  });

  it('should return rows sorted by power', () => {
    const rows = [
      { name: 'test', power: 'test2' },
      { name: 'test', power: 'test' },
      { name: 'test', power: 'test3' }
    ];
    const result = sortByPower(rows);
    expect(result).toEqual(rows.sort((a, b) => a.power.localeCompare(b.power)));
  });
});

// filters rows by name or pwoer
export const filterByNameAndPower = (rows, filter) => {
  /* eslint-disable no-unused-vars */
  return rows.filter((row) => {
    return (
      row.name.toLowerCase().includes(filter.toLowerCase()) ||
      row.power.toLowerCase().includes(filter.toLowerCase())
    );
  });
};

// sorts by power
export const sortByPower = (rows) => {
  /* eslint-disable no-unused-vars */
  return rows.sort((a, b) => a.power.localeCompare(b.power));
};

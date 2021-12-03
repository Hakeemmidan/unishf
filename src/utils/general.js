// filters rows by name or pwoer
export const filterByNameAndPower = (rows, inputVal) => {
  /* eslint-disable no-unused-vars */
  return rows.filter((row) => {
    return (
      row.name.toLowerCase().includes(inputVal.toLowerCase()) ||
      row.power.toLowerCase().includes(inputVal.toLowerCase())
    );
  });
};

// sorts by col (in-place; changes the order of the submitted array)
export const sortBy = (rows, col) => {
  /* eslint-disable no-unused-vars */
  return rows.sort((a, b) => a[col].localeCompare(b[col]));
};

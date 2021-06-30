const heapConversion = (papaCSV) => {
  console.log(papaCSV);
};

const processRawData = (rawData) => {
  let heaps = heapConversion(rawData);
  return [
    {
      Winner: "Winner1",
      Loser: "Loser1",
      Amount: 1,
    },
    {
      Winner: "Winner2",
      Loser: "Loser2",
      Amount: 2,
    },
    {
      Winner: "Winner3",
      Loser: "Loser3",
      Amount: 3,
    },
    {
      Winner: "Winner4",
      Loser: "Loser4",
      Amount: 4,
    },
  ];
};
export { processRawData };

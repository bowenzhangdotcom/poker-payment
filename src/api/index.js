const identifyData = (rawData) => {
  return "PokerNow";
};

const heapConversion = (papaCSV) => {
  console.log(papaCSV);
};

const heapToArr = (heaps) => {
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

const processRawData = (rawData) => {
  let dataSource = "";
  dataSource = identifyData(rawData);
  let heaps = heapConversion(rawData, dataSource);
  let resultArray = heapToArr(heaps);
  return resultArray;
};
export { processRawData };

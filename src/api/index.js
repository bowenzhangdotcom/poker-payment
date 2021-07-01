import { Heap } from "heap-js";

const identifyData = (rawData) => {
  return "PokerNow";
};

const heapConversion = (papaCSV, source) => {
  let minArray = [];
  let maxArray = [];
  let csvData = papaCSV.data;

  let balanceCheck = 0;
  for (let i = 0; i < csvData.length; i++) {
    let row = csvData[i];
    let person = row["player_nickname"];
    let balance = parseFloat(row["net"]);
    let arr = [person, balance];
    if (balance < 0) {
      minArray.push(arr);
    } else {
      maxArray.push(arr);
    }
    balanceCheck += balance;
  }
  if (balanceCheck !== 0) {
    alert("Your net total doesn't add up to 0");
  }

  const minPriorityComparator = (a, b) => a[1] - b[1];
  const minPQ = new Heap(minPriorityComparator);
  minPQ.init(minArray);

  const maxPriorityComparator = (a, b) => b[1] - a[1];
  const maxPQ = new Heap(maxPriorityComparator);
  maxPQ.init(maxArray);

  let resultArray = [];
  while (minPQ.size() > 0 && maxPQ.size() > 0) {
    let obj = {
      Winner: "",
      Loser: "",
      Amount: "",
    };
    let down = minPQ.poll();
    let up = maxPQ.poll();
    obj["Winner"] = up[0];
    obj["Loser"] = down[0];
    let diff = up[1] + down[1];
    if (diff < 0) {
      obj["Amount"] = up[1];
      minPQ.add([down[0], diff]);
    }
    if (diff > 0) {
      obj["Amount"] = -down[1];
      maxPQ.add([up[0], diff]);
    } else {
      obj["Amount"] = up[1];
    }
    resultArray.push(obj);
  }
  return resultArray;
};

const processRawData = (rawData) => {
  let dataSource = "";
  dataSource = identifyData(rawData);
  let resultArray = heapConversion(rawData, dataSource);
  return resultArray;
};
export { processRawData };

import { Heap } from "heap-js";

const identifyData = (rawData) => {
  let data = rawData.data[0];
  if (
    "buy_in" in data &&
    "buy_out" in data &&
    "net" in data &&
    "player_id" in data &&
    "player_nickname" in data &&
    "session_end_at" in data &&
    "session_start_at" in data &&
    "stack" in data
  ) {
    return "PokerNow";
  }
  alert("Invalid data source - check that the file is the original export!");
};

const processPokerNow = (pokerNowData) => {
  let obj = {};
  for (let i = 0; i < pokerNowData.length; i++) {
    let row = pokerNowData[i];
    if (Object.keys(row).length > 1) {
      let name = `${row["player_nickname"]} (${row["player_id"]})`;
      if (!(name in obj)) {
        obj[name] = 0;
      }
      obj[name] += parseInt(row["net"]);
    }
  }
  return obj;
};

const heapConversion = (papaCSV, source) => {
  let csvData = {};
  if (source === "PokerNow") {
    csvData = processPokerNow(papaCSV.data);
  }
  let minArray = [];
  let maxArray = [];
  let balanceCheck = 0;

  for (let key of Object.keys(csvData)) {
    let person = key;
    let balance = csvData[key];
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
  let dataSource = identifyData(rawData);
  let resultArray = heapConversion(rawData, dataSource);
  return resultArray;
};
export { processRawData };

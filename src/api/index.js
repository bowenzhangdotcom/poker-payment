import { Heap } from "heap-js";

const identifyData = (rawData) => {
  if (Array.isArray(rawData)) {
    return "FormEntry";
  } else if (typeof rawData === "object") {
    let data = rawData.data[0];
    let hasDonkHouseKeyRegex = Object.keys(data).some(function (key) {
      return /Most recent sessions as of/.test(key);
    });
    if (hasDonkHouseKeyRegex) {
      return "DonkHouse";
    } else if (
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
  }
  alert("Invalid data source - check that the file is the original export!");
};

const processPokerNow = (papaCSV) => {
  let pokerNowData = papaCSV.data;
  let obj = {};
  for (let i = 0; i < pokerNowData.length; i++) {
    let row = pokerNowData[i];
    if (Object.keys(row).length > 1) {
      let name = `${row["player_nickname"]} (${row["player_id"]})`;
      if (!(name in obj)) {
        obj[name] = 0;
      }
      obj[name] += parseFloat(row["net"]);
    }
  }
  return obj;
};

const processDonkHouse = (papaCSV) => {
  let DonkHouseData = papaCSV.data;
  let obj = {};
  for (let i = 1; i < DonkHouseData.length; i++) {
    let row = DonkHouseData[i];
    const primaryKey = Object.keys(row)[0];
    let user = row[primaryKey];
    if (user === "" || user === "End time:") {
      return obj;
    }
    let valueArray = row["__parsed_extra"];
    let [In, Out, Net, ChipsInPlay, Contact] = valueArray;

    let nameKey;
    if (Contact.length > 0 && Contact !== "None provided") {
      nameKey = Contact;
    } else {
      nameKey = user;
    }
    obj[nameKey] = parseFloat(Net);
  }
  return obj;
};

const processFormEntry = (formData) => {
  let obj = {};
  for (let i = 0; i < formData.length; i++) {
    let row = formData[i];
    let name = row["name"];
    let netVal;
    if (row["net"]) {
      netVal = parseFloat(row["net"]);
    } else {
      netVal = parseFloat(row["buyout"]) - parseFloat(row["buyin"]);
    }
    if (!(name in obj)) {
      obj[name] = 0;
    }
    obj[name] += netVal;
  }
  return obj;
};

const createPlayerNets = (rawData, source, currentPlayerNets) => {
  let csvData = {};
  if (source === "PokerNow") {
    csvData = processPokerNow(rawData);
  } else if (source === "FormEntry") {
    csvData = processFormEntry(rawData);
  } else if (source === "DonkHouse") {
    csvData = processDonkHouse(rawData);
  }

  for (let key of Object.keys(currentPlayerNets)) {
    if (key in csvData) {
      csvData[key] += currentPlayerNets[key];
    } else {
      csvData[key] = currentPlayerNets[key];
    }
  }
  return csvData;
};
const heapConversion = (csvData, source) => {
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
    alert(`Net total is off by ${balanceCheck}`);
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
  return { payouts: resultArray, playerNets: csvData };
};

const processRawData = (rawData, currentPlayerNets) => {
  let dataSource = identifyData(rawData);
  let playerNets = createPlayerNets(rawData, dataSource, currentPlayerNets);
  let results = heapConversion(playerNets);
  return results;
};
export { processRawData };

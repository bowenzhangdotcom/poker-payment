import React from "react";
import styles from "./App.module.css";
import Papa from "papaparse";
import FileSubmit from "./components/FileSubmit/FileSubmit";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import { processRawData } from "./api/index.js";
class App extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      processedData: [
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
      ],
    };
  }

  handleFileChange = (event) => {
    if (event.length > 0) {
      Papa.parse(event[0], {
        header: true,
        complete: (results) => {
          console.log(results);
          let ledgerData = processRawData(results);
          console.log(ledgerData);
          this.setState({ processedData: ledgerData });
        },
      });
    }
  };

  render() {
    return (
      <div className={styles.Body}>
        <div>Header Text</div>
        <div className={styles.SubmitContainer}>
          <FileSubmit handleFileChange={this.handleFileChange} />
        </div>
        <div className={styles.ResultsTable}>
          <ResultsTable data={this.state.processedData} />
        </div>
      </div>
    );
  }
}

export default App;

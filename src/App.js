import React from "react";
import styles from "./App.module.css";
import Papa from "papaparse";
import FileSubmit from "./components/FileSubmit/FileSubmit";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import FormEntry from "./components/FormEntry/FormEntry";
import { processRawData } from "./api/index.js";
class App extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      processedData: {
        payouts: [
          {
            Winner: "Won68",
            Loser: "Lost69",
            Amount: 68,
          },
          {
            Winner: "Won1",
            Loser: "Lost69",
            Amount: 1,
          },
        ],
        playerNets: {
          Lost69: -69,
          Won68: 68,
          Won1: 1,
        },
      },
    };
  }

  handleFileChange = (event) => {
    if (event.length > 0) {
      Papa.parse(event[0], {
        header: true,
        complete: (results) => {
          let ledgerData = processRawData(results);
          this.setState({ processedData: ledgerData });
        },
      });
    }
  };

  handleFormEntry = (formData) => {
    let ledgerData = processRawData(formData);
    this.setState({ processedData: ledgerData });
  };

  render() {
    return (
      <div className={styles.Body}>
        <h1>Poker Payments</h1>
        <div className={styles.SubmitContainer}>
          <FileSubmit handleFileChange={this.handleFileChange} />
        </div>
        <div className={styles.TableContainer}>
          <FormEntry handleFormEntry={this.handleFormEntry} />
        </div>
        <h2>Payments</h2>
        <div className={styles.ResultsTable}>
          <ResultsTable data={this.state.processedData} />
        </div>
      </div>
    );
  }
}

export default App;

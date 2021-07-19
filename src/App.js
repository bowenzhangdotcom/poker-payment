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
      processedData: [
        {
          Winner: "exampleWinner1",
          Loser: "exampleLoser1",
          Amount: 1,
        },
        {
          Winner: "exampleWinner2",
          Loser: "exampleLoser2",
          Amount: 2,
        },
        {
          Winner: "exampleWinner3",
          Loser: "exampleLoser3",
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
        <h1>PokerNow Payments</h1>
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

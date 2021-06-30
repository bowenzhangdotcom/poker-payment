import React from "react";
import styles from "./App.module.css";
import FileSubmit from "./components/FileSubmit/FileSubmit";
import ResultsTable from "./components/ResultsTable/ResultsTable";

class App extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      rawData: {},
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
      //   let reader = new FileReader();
      //   reader.onload = (e) => {
      //     let obj = JSON.parse(e.target.result);
      //     this.setState({ rawHingeData: obj }, () => {
      //       let dates = getStartEndDate(this.state.rawHingeData);
      //       let pHingeData = processHingeData(
      //         this.state.rawHingeData,
      //         dates["startDate"],
      //         dates["endDate"]
      //       );
      //       this.setState({
      //         processedHingeData: pHingeData,
      //         startDate: dates["startDate"],
      //         endDate: dates["endDate"],
      //         header: "Your Dating Dashboard",
      //       });
      //     });
      //   };
      //   reader.readAsText(event[0]);
      console.log(event);
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

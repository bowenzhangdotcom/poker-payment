import React from 'react';
import styles from './ResultsTable.module.css';

class ResultsTable extends React.Component{
    render() {
        let rows = [];
        const ledger = this.props.data
        for (let i = 0; i < ledger.length; i++){
            rows.push(
            <div className={styles.TextRow} key={i}>
                {ledger[i]["Loser"]} pays {ledger[i]["Winner"]} ${ledger[i]["Amount"]}
            </div>);
        }
        return (
            <div id='ResultsTable' className={styles.ResultsTable}>
                {rows}
            </div>
        );
    }
}

export default ResultsTable;
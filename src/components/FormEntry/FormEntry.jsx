import styles from './FormEntry.module.css';
import { useState } from "react";

export default function FormEntry(props) {
  const [people, setPeople] = useState([
      {"name": "Lost69", "net": -69},
      {"name": "Won68", "buyin": 1, "buyout": 69},
      {"name": "Won1", "buyin": 420, "buyout": 421}]);
  const [displayForm, setDisplayForm] = useState(true);
  const [newPerson, setNewPerson] = useState({
    name: "",
    buyin: "",
    buyout: ""
  });

  const addPerson = () => {
    setPeople([...people, { ...newPerson }]);
    setNewPerson({ name: "", buyin: "", buyout: "" });
    setDisplayForm(false);
  };

  const handleOnChange = (event) => {
    setNewPerson({
      ...newPerson,
      [event.target.name]: event.target.value
    });
  };

  const deleteRow = (event) => {
    let tempPeople = people;
    tempPeople.splice(event.target.id, 1);
    setPeople([...tempPeople]);
  };

  const passFormData = (event) => {
    props.handleFormEntry(people)
  }
 
  return (
    <div>
      <table className={styles.DataTable}>
        <thead>
          <tr className={styles.TableHead}>
            <th>Name</th>
            <th>Buy-in</th>
            <th>Buy-out</th>
            <th>Net</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {people.map((row, index) => (
            <tr>
              <td className={styles.TableName}>{row.name}</td>
              <td className={styles.TableNumber}>{row.buyin}</td>
              <td className={styles.TableNumber}>{row.buyout}</td>
              <td className={styles.TableNumber}>{row.net}</td>
              <td>
                <button 
                    className={styles.deleteRow} 
                    onClick={deleteRow}
                    id={index}>
                        Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {displayForm ? (
        <div>
          <div className = {styles.PeopleAdd}>
            <input
              placeholder="Name"
              onChange={handleOnChange}
              value={newPerson.name}
              name="name"
              className={styles.InputBox}
            />
            <input
              placeholder="Buy-in"
              onChange={handleOnChange}
              value={newPerson.buyin}
              name="buyin"
              className={styles.InputBox}
            />
            <input
              placeholder="Buy-out"
              onChange={handleOnChange}
              value={newPerson.buyout}
              name="buyout"
              className={styles.InputBox}
            />
            <input
              placeholder="Net"
              onChange={handleOnChange}
              value={newPerson.net}
              name="net"
              className={styles.InputBox}
            />
          </div>
          <button onClick={addPerson} className={styles.addButton}>
            Add Person
          </button>
        </div>
      ) : (
        <button onClick={() => setDisplayForm(!displayForm)} className={styles.addButton}>
          Add Row
        </button>
      )}
      <div>
          <button onClick={passFormData} className={styles.submitForm}>Submit!</button>
      </div>
    </div>
  );
}
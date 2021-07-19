import styles from './FormEntry.module.css';
import { useState } from "react";

export default function FormEntry(props) {
  const [people, setPeople] = useState([
      {"name": "Lost69", "buyin": 69, "buyout": 0},
      {"name": "Won68", "buyin": 1, "buyout": 69},
      {"name": "Won20", "buyin": 420, "buyout": 440},
      {"name": "Lost15", "buyin": 420, "buyout": 405},
      {"name": "Lost5", "buyin": 420, "buyout": 415},
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
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Buy-in</th>
            <th>Buy-out</th>
          </tr>
        </thead>
        <tbody>
          {people.map((row, index) => (
            <tr>
              <td>{row.name}</td>
              <td>{row.buyin}</td>
              <td>{row.buyout}</td>
              <td>
                <button 
                    className="deleteRow" 
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
          <input
            placeholder="Name"
            onChange={handleOnChange}
            value={newPerson.name}
            name="name"
          />
          <input
            placeholder="Buy-in"
            onChange={handleOnChange}
            value={newPerson.buyin}
            name="buyin"
          />
          <input
            placeholder="Buy-out"
            onChange={handleOnChange}
            value={newPerson.buyout}
            name="buyout"
          />
          <button onClick={addPerson} className="addRow">
            Add Person
          </button>
        </div>
      ) : (
        <button onClick={() => setDisplayForm(!displayForm)} className="addRow">
          Add Row
        </button>
      )}
      <div>
          <button onClick={passFormData}>Submit!</button>
      </div>
    </div>
  );
}
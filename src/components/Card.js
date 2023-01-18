import { useState } from "react";
import Button from "../UI/Button";
import ErrorModal from "./ErrorModal";
import "./Card.css";

function Card(props) {
  const [getInputName, setGetInputName] = useState("");
  const [getInputAge, setGetInputAge] = useState("");
  const [Error, setError] = useState({ title: "", message: "" });

  function getName(event) {
    setGetInputName(event.currentTarget.value);
  }

  function getAge(event) {
    setGetInputAge(event.currentTarget.value);
  }

  const userInput = {
    name: getInputName,
    age: getInputAge,
    id: Math.random().toString(),
  };

  function formSubmitHandler(event) {
    event.preventDefault();
    if (getInputName.trim().length === 0 || getInputAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)"
      })
      return;
    }
    if (+getInputAge < 1) {
      setError({
        title: "Invalid Input",
        message: "Age must be < 1"
      })
      return;
    }
    props.addInput(userInput);
    props.popModal(userInput);
    setGetInputName("");
    setGetInputAge("");
  }

  function handleCloseModal() {
    setError(null);
    setGetInputName("");
    setGetInputAge("");
    return;
  }

  return (
    <div>
      {Error && (
        <ErrorModal
          title={Error.title}
          message={Error.message}
          onConfirm={handleCloseModal}
        />
      )}
      <form onSubmit={formSubmitHandler} className="form-control">
        <label> Username </label>
        <input type="text" onChange={getName} id="name" value={getInputName}></input>
        <label > Age(years)</label>
        <input type="text" onChange={getAge} id="age" value={getInputAge}></input>
        <Button type="submit"> Add user </Button>
      </form>
    </div>
  );
}

export default Card;

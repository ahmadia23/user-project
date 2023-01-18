import "./ErrorModal.css";
import Button from "../UI/Button";

function ErrorModal(props) {


  return (
    <div>
      <div className="backdrop" onClick={props.onConfirm}/>
      <div className="modal">
        <header className="header">
          <h2 className="modal-title">{props.title}</h2>
        </header>
        <div className="content">
          <p> {props.message}</p>
        </div>
        <footer className="actions">
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </div>
    </div>
  );
}
export default ErrorModal;

// Please enter a valid name and age (non-empty values)
// Invalid Input

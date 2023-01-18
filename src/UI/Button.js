import "./Button.css"

function Button(props){
  return (
    <div>
      <button className="button" type={props.type} onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  )
}


export default Button;

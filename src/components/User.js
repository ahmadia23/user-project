import "./User.css"

function User(props){
  return (
    <div className="user-card">
      <p className="user-info" >{props.name} ({props.age} years old)</p>
    </div>
  )
}

export default User;

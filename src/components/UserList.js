import "./UserList.css"
import User from "./User"

function UserList(props){

  return(
    <div className="user-list">
     {console.log(props.users)}
      {props.users.map(user => {
        return (<User key={user.id} name={user.name} age={user.age}></User>)
      })}
    </div>
  )
}


export default UserList;

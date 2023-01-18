import React, { useState } from 'react';
import Card from './components/Card';
import UserList from './components/UserList';
import "./App.css";

function App() {
  const [users, setGetUsers] = useState([{
    name:"john",
    age: "15",
    id: "g1"
  }]);



  function addNewUser(userInput){
    setGetUsers((prevUsers) => {
    const updatedUsers = [...prevUsers];
    updatedUsers.unshift({ name: userInput.name, age: userInput.age, id: userInput.id});
    return updatedUsers;
    });
  }


  return (
    <div>
      this is the new project
      <div className='container'>
        <Card addInput={addNewUser}></Card>
        <UserList users={users}></UserList>
      </div>
    </div>
  );
}

export default App;

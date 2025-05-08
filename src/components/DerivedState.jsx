import { useState } from "react";
  // const users = [
  //   {name:"Prankur", age:23},
  //   {name:"Rohan", age:25},
  //   {name:"Rahul", age:27},
  //   {name:"Prathmesh", age:24}
  // ];
  const DerivedState = () =>{
    const [users, setUsers] = useState([
      {name:"Prankur", age:23},
      {name:"Rohan", age:25},
      {name:"Rahul", age:27},
      {name:"Prathmesh", age:24}
    ]); 
    console.log(users);
    return(
      <div className="main-div">
      <h1>Users List</h1>
      <ul>
       {users.map((user, index) =>{
            return(
            
            <li key={index}>
              {user.name} - {user.age} year old

            </li>
            
            );
        })}
        
      </ul>
      </div>
    );
};
export default DerivedState;
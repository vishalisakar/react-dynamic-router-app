import React, { useState, useEffect } from "react";
import "./App.css";

function UserDetails( {match}) {
 
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchUser();
    console.log(match);
  }, [user.length]);

    const fetchUser = async () => {
        const user = await fetch(`https://jsonplaceholder.typicode.com/users?id=${match.params.id}`);

        const data = await user.json();

        console.log(data);
        setUser(data[0]);
        console.log(data[0].address);
        console.log(Object.keys(data[0].address));
    }

  return (
    <div>
        <h1>user</h1>
  <h2> Name: {user.name}</h2>
  <h2> EmailID: {user.email}</h2>
<h2> Company: { user.company && Object.keys(user.company).map( (v,k) => {
return <div key={k}>{user.company[v]}</div>
})
    }</h2>
    </div>
  );
}

export default UserDetails;

import React, { useState, useEffect } from "react";
import "./App.css";
import {Link} from 'react-router-dom';
function Shop() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchItems();

  }, [user.length]);


  const fetchItems = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const userdata = await data.json();
    console.log(userdata);
    setUser(userdata);
    console.log(user)
    
  };

  return (
    <div>
      {
      user.map(e => {
        return <h2 key={e.id}>
           <Link to={`/shop/${e.id}`}>{e.name}</Link>
        </h2>
      })
      }
    </div>
  );
}

export default Shop;

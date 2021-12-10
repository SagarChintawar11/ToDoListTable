import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const UserDetails = (props) => {
 
  const [UserDetails, setUserDetails] = useState([])
  const id=props.id;
  console.log(id);

 const URL = `https://jsonplaceholder.typicode.com/users/${id}`;
 useEffect(async() => {
 await axios
    .get(URL)
    .then((res) => {
      setUserDetails(res.data);
    })
    .catch((err) => console.error(err));
},[id]);


  return (
    <div>
      <div class="row m-5 centered">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-content">
            <div>
             <h3>User Id : {UserDetails.id}</h3>
            <h3>Name : {UserDetails.name}</h3>
            <h3>Email :  {UserDetails.email}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )};

export default UserDetails;

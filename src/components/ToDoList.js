import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import UserDetails from "./UserDetails";

const ToDoList = () => {
  const URL = "https://jsonplaceholder.typicode.com/todos";

  const [todo, settodo] = useState([]);
  const [state, setstate] = useState();

  useEffect(async() => {
    await axios
      .get(URL)
      .then((res) => {
        settodo(res.data);
      })
      .catch((err) => console.error(err));
  }, []);


  return (
    <div>
      <div class="row">
        <div class="col s1">
          <div>
            <h3>Todos</h3>
          </div>
          <div>
            <table className="centered">
              <thead>
                <tr>
                  <th>ToDo ID</th>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {todo.map((todo, index) => {
                  return (
                    <tr key={index}>
                      <td>{todo.id}</td>
                      <td>{todo.title}</td>
                      <td>{todo.completed}</td>
                      <td>
                        <a
                          class="waves-effect waves-light btn"
                          onClick={()=>{
                            setstate(todo.id)
                             
                          }}
                        >
                          User Details
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div class="col s1">
          {<UserDetails id={state}/>}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;

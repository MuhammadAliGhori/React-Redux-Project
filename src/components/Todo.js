import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deletTodo, removeTodo } from "./action/index";
import './todo.css';

export default function Todo() {
  const list = useSelector((state) => state.todoReducer.list);

  const dispatch = useDispatch();
  const [inputData, setInputData] = useState("");
  return (
 <div className="d-flex justify-content-center mt-5">
       <div className="todo-main">
      <h1 className="crd">Crud of React--Redux</h1>
      <div className="d-flex align-items-center">
        <input
        className="form-control"
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-info text-light m-3"
          onClick={() => dispatch(addTodo(inputData), setInputData(""))}
        >
          Add
        </button>
      </div>
      <div>
        <div className="m-3 pb-3 d-flex justify-content-center flex-column  gap-3">
          {list.map((item, id) => {
            return (
            <div>
                  <div key={item.id} className="d-flex justify-content-between">
               
               <h3>{item.data}</h3>
               <button className="btn btn-danger m-1" type="button" onClick={() => dispatch(deletTodo(item.id))}>
                 Delete
               </button>
         
           </div>
           <hr />
            </div>
              
            );
          })}
        </div>
   
        <div>
            <button type="" className="btn btn-warning text-light" onClick={()=>dispatch(removeTodo())}>Remove All</button>
        </div>
      </div>
    </div>
 </div>
  );
}

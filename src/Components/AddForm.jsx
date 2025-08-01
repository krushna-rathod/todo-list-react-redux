import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import "./Todo.css"

export default function AddForm(){

    let [task,setTask]=useState("")

    const dispatch=useDispatch()

    let addTask=(event)=>{
        setTask(event.target.value)

    }
    const submitHandler=(event)=>{
        event.preventDefault();
        dispatch(addTodo(task))
        setTask("");
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" value={task} onChange={addTask}></input>
                <button>Add task </button>
                
            </form>
        </div>
    )
}
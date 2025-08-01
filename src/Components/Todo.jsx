import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { markAsDone } from "../features/todo/todoSlice";
import "./Todo.css"

export default function Todo (){
   const todos= useSelector ((state)=>state.todos);
   
   const dispatch=useDispatch()

   let clickHandler=(id)=>{
   dispatch(deleteTodo(id))
   }
   const clickMark = (id) => {
    dispatch(markAsDone(id));
  };

    return(

    <div className="design">
    
    <h3> Todo List App</h3>
    <AddForm/>
    <ul>
        {todos.map((todo)=>
            (<li key={todo.id} >
                <span  style={todo.isDone ?{textDecorationLine:"line-through"}:{} }>{todo.task}</span>
            <button onClick={()=>clickHandler (todo.id)}>Delete</button>
             <button onClick={() => clickMark(todo.id)} disabled={todo.isDone}>
              {todo.isDone ? "Completed" : "Mark As Done"}
            </button>
            
           </li>

            ))}
    </ul>
    </div>
    )
}
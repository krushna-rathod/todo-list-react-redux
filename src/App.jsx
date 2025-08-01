
import React from 'react'
 import Todo from './Components/Todo'
// import './App.css'
import {Provider} from "react-redux"
import { store} from "./app/store"



function App()  {
  return (
    <div>
    <Provider store={ store}>
     <Todo/>
    </Provider>
     
    </div>
  )
}

export default App

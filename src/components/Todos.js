import React, { useState } from "react";
export default function TodoList(){


    const [newTodo, setNewTodo] = useState("")

    return  <div class = "todo-list container">
                <h2>Todo List</h2>
                <input type = 'text'></input>
                <ls class = "todoapp stack-large">
                    
                </ls>
            </div>
}
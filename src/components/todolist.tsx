import React, { useState } from "react";

export default function todolist(){
    const [isVisible, setIsVisible] = useState(false);
    function addTodo() {
        console.log("Add Todo");
    }
    function removeTodo() {
        console.log("Remove Todo");
    }
    function showTodo() {
        setIsVisible(!isVisible);
    }
    function hideTodo() {
        console.log("Hide Todo");
    }
    return (
        <div>
            {isVisible && (
        <div className="bg-white text-black">
            <h1>Todo List</h1>
            <div>
                <input type="text" placeholder="Add Todo" />
                <button>Add</button>
            </div>
            <div>
                <ul>
                    <li>Todo 1</li>
                    <li>Todo 2</li>
                    <li>Todo 3</li>
                </ul>
            </div>
        </div>
            )}
        </div>
    );
}
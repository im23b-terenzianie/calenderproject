import React, { useImperativeHandle, useState, forwardRef } from "react";

export interface TodoProps {
    showTodo: () => void;
    hideTodo: () => void;
}

const TodoList = forwardRef<TodoProps>((props, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const [todo, setTodo] = useState<string[]>([]);
    const [newTodo, setNewTodo] = useState("");

    useImperativeHandle(ref, () => ({
        showTodo,
        hideTodo,
    }));

    function addTodo(event: React.MouseEvent<HTMLButtonElement>) {
        setTodo((prevTodo) => [...prevTodo, newTodo]);
        setNewTodo("");
    }

    function removeTodo() {
        console.log("Remove Todo");
    }

    function showTodo() {
        setIsVisible(true);
    }

    function hideTodo() {
        setIsVisible(false);
    }
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNewTodo(event.target.value);
    }

    return (
        <div>
            <button onClick={showTodo}>Show Todo</button> <button onClick={hideTodo}>Hide Todo</button>
            {isVisible && (
                <div className="bg-white text-black">
                    <h1>Todo List</h1>
                    <div>
                        <input
                            type="text"
                            placeholder="Add Todo"
                            name="todo"
                            value={newTodo}
                            onChange={handleChange}

                        />
                        <button onClick={addTodo}>Add</button>
                    </div>
                    <div>
                        <ul>
                            {todo.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
});

export default TodoList;
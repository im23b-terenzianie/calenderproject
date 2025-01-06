import React, { useImperativeHandle, useState, forwardRef } from "react";

export interface TodoProps {
    showTodo: () => void;
    hideTodo: () => void;
}

const TodoList = forwardRef<TodoProps>((props, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const [todo, setTodo] = useState<string[]>([]);

    useImperativeHandle(ref, () => ({
        showTodo,
        hideTodo,
    }));

    function addTodo() {
        console.log("Add Todo");
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
        const newTodo = event.target.value;
        setTodo((prevTodo) => [...prevTodo, newTodo]);
        console.log(newTodo);
    }

    return (
        <div>
            {isVisible && (
                <div className="bg-white text-black">
                    <h1>Todo List</h1>
                    <div>
                        <input
                            type="text"
                            placeholder="Add Todo"
                            name="todo"
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
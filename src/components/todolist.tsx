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
            <div className="flex justify-end">
            <button onClick={showTodo} className="border-2 my-1 mx-1 w-1/12">Show Todo</button>
            </div>
            {isVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded shadow-lg w-1/3">
                        <h1 className="text-xl mb-4 text-black">Todo List</h1>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Add Todo"
                                name="todo"
                                value={newTodo}
                                onChange={handleChange}
                                className="border p-2 w-full"
                            />
                            <button onClick={addTodo} className="mt-2 p-2 bg-blue-500 text-white rounded">Add</button>
                        </div>
                        <ul className="mb-4 ">
                            {todo.map((item, index) => (
                                <li key={index} className="border-b p-2 text-black">{item}</li>
                            ))}
                        </ul>
                        <button onClick={hideTodo} className="p-2 bg-red-500 text-white rounded">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
});

export default TodoList;
import React, { useState, forwardRef, useImperativeHandle } from "react";

export interface NoteProps {
    Title: string;
    Textnote: string;
    onSave: () => void;
}
export interface NoteRef {
    showNote: () => void;
    getTitle: () => string;
    getTextNote: () => string;
}

const Note = forwardRef<NoteRef, NoteProps>((props, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    function showNote() {
        setIsVisible(!isVisible);
    }

    useImperativeHandle(ref, () => ({
        showNote,
        getTitle: () => inputs.Title,
        getTextNote: () => inputs.Textnote,
    }));

    const [inputs, setInputs] = useState({
        Title: props.Title || "",
        Textnote: props.Textnote || "",
    });

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { id, value } = event.target;
        setInputs((prevInputs) => ({
            ...prevInputs,
            [id]: value,
        }));
    }

    function handleSave(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        props.onSave();
        setInputs({ Title: "", Textnote: ""});
        showNote();
    }

    function handleDelete(event: React.MouseEvent<HTMLButtonElement>) {
        setInputs({ Title: "", Textnote: ""});
        showNote();
    }

    return (
        <div>
            {isVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                        <h2 className="text-xl font-bold text-black mb-4">Add Note</h2>
                        <form onSubmit={handleSave} >
                            <label className="text-black block mb-1">Title</label>
                            <input
                                className="w-full p-2 mb-4 bg-gray-100 rounded-lg dark:text-black"
                                type="text"
                                id="Title"
                                value={inputs.Title || ""}
                                onChange={handleChange}
                            />
                            <label className="text-black block mb-1">Note</label>
                            <textarea
                                className="w-full p-2 mb-4 bg-gray-100 rounded-lg dark:text-black"
                                id="Textnote"
                                value={inputs.Textnote || ""}
                                onChange={handleChange}
                            ></textarea>
                            <button
                                className="p-2 bg-blue-500 text-white rounded-lg"
                                id="Save"
                                type="submit"
                            >
                                Save
                            </button>
                            <button
                                className="p-2 bg-blue-500 text-white rounded-lg"
                                id="Delete"
                                type="reset"
                                onClick={handleDelete}
                            >
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
});

export default Note;
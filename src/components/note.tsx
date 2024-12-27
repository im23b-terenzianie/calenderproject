
export default function Note(){
    function showNote(){
        const note = document.getElementById("Note")
        if (note) {
            note.classList.toggle("hidden")
        }

    }
    return (
        addEventListener("click", showNote),
        <div className="hidden justify-center items-center h-screen" id="Note">
            <label className="text-white dark:text-black">Title</label>
            <input className="p-2 mb-3 bg-gray-800 rounded-lg dark:bg-gray-200" type="text" id="Title"/>
            <label className="text-white dark:text-black">Note</label>
            <textarea className="p-2 mb-3 bg-gray-800 rounded-lg dark:bg-gray-200" id="Note"></textarea>
            <label className="text-white dark:text-black">Date</label>
            <input className="p-2 mb-3 bg-gray-800 rounded-lg dark:bg-gray-200" type="date" id="Date"/>
            <button className="p-2 bg-gray-800 rounded-lg dark:bg-gray-200 text-black" id="Save">Save</button>

        </div>
    )
}
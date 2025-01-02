import '../../app/globals.css';
import React, { useRef } from "react";
import Note, { NoteRef } from "./note";

export default function Calenderrows() {
    const noteRef = useRef<NoteRef>(null);

    function handleCellClick() {
        if (noteRef.current) {
            noteRef.current.showNote();
        }
    }
    return (
        <div>
            <div className="grid grid-cols-7">
                <div className="border-b-2 border-l-2 border-t-2">Monday</div>
                <div className="border-b-2 border-l-2 border-t-2">Tuesday</div>
                <div className="border-b-2 border-l-2 border-t-2">Wednesday</div>
                <div className="border-b-2 border-l-2 border-t-2">Thursday</div>
                <div className="border-b-2 border-l-2 border-t-2">Friday</div>
                <div className="border-b-2 border-l-2 border-t-2">Saturday</div>
                <div className="border-b-2 border-l-2 border-t-2">Sunday</div>
            </div>
            <div className="grid grid-cols-7">
                {[...Array(42)].map((_, i) => (
                    <div
                        key={i}
                        className="border-b-2 border-l-2 h-32 flex justify-between Datecell"
                        id={`cell${i + 1}`}
                        onClick={handleCellClick}
                    ></div>
                ))}
            </div>
            <Note ref={noteRef} />
        </div>
    );
}


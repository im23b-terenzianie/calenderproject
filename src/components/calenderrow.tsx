import "../../app/globals.css";
import React, { useRef, useState } from "react";
import Note, { NoteRef } from "./note";


export default function Calenderrows() {
    const noteRef = useRef<NoteRef>(null as any);
    const [selectedCell, setSelectedCell] = useState<number | null>(null);
    const [titles, setTitles] = useState<string[]>(Array(42).fill(""));


    function handleCellClick(index: number) {
        setSelectedCell(index);
        if (noteRef.current) {
            noteRef.current.showNote();
        }
    }

    function handleSave() {
        if (noteRef.current && selectedCell !== null) {
            const Tasktitle = noteRef.current.getTitle();
            setTitles((prevTitles) => {
                const newTitles = [...prevTitles];
                newTitles[selectedCell] = Tasktitle;
                return newTitles;
            });
            if (noteRef.current) noteRef.current.showNote();
        }
    }

    return (
        <div>
            <div className="grid grid-cols-7 text-center font-bold">
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
                        className="border-b-2 border-l-2 h-32 flex flex-col justify-between items-center p-2 cursor-pointer"
                        id={`cell${i + 1}`}
                        onClick={() => handleCellClick(i)}
                    >
                        <div className="font-bold">{i + 1} tt</div>
                        <div className="text-sm text-gray-700 bg-gray-100 rounded p-1 w-full text-center">
                            {titles[i] || "No Note"}
                        </div>
                    </div>
                ))}
            </div>

            <Note ref={noteRef} Title="" Textnote="" onSave={handleSave} />
        </div>
    );
}

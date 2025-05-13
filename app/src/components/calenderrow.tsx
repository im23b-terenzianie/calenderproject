'use client'
import "../../globals.css";
import React, { useRef, useState } from "react";
import Note, { NoteRef } from "./note";
import { addCalendarEntry, getUserId } from "../../../lib/supabaseClient";

export default function Calenderrows() {
    const noteRef = useRef<NoteRef>(null as any);
    const [selectedCell, setSelectedCell] = useState<number | null>(null);
    const [titles, setTitles] = useState<string[][]>(Array(42).fill(null).map(() => []));

    async function handleCellClick(index: number) {
        setSelectedCell(index);
        if (noteRef.current) {
            noteRef.current.showNote();
        }
    }

    async function handleSave() {
        if (noteRef.current && selectedCell !== null) {
            const Tasktitle = noteRef.current.getTitle();
            const date = new Date();

            // Benutzer-ID abrufen
            const userId = await getUserId();
            if (!userId) {
                console.error("Benutzer-ID konnte nicht abgerufen werden.");
                return;
            }

            setTitles((prevTitles) => {
                const newTitles = [...prevTitles];
                newTitles[selectedCell] = [...newTitles[selectedCell], Tasktitle];
                return newTitles;
            });

            try {
                // Speichere den Kalendereintrag in Supabase
                await addCalendarEntry(Tasktitle, "", date.toISOString().split("T")[0], userId);
                console.log("Kalendereintrag erfolgreich gespeichert!");
            } catch (error) {
                console.error("Fehler beim Speichern des Kalendereintrags:", error);
            }

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
                        <div className="date font-bold">{i + 1}</div>
                        <div className="text-sm text-gray-700 bg-gray-100 rounded p-1 w-full text-center">
                            {titles[i].length > 0
                                ? titles[i].map((todo, index) => (
                                    <div key={index} className="bg-blue-100 rounded p-1 mb-1">
                                        {todo}
                                    </div>
                                ))
                                : "No Notes"}
                        </div>
                    </div>
                ))}
            </div>

            <Note ref={noteRef} Title="" Textnote="" onSave={handleSave} />
        </div>
    );
}
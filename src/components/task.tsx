import React, { useEffect } from 'react';
import { NoteRef } from "@/src/components/note";

interface TaskProps {
    noteRef: React.RefObject<NoteRef>;
}

export default function Task({ noteRef }: TaskProps) {
    useEffect(() => {
        if (noteRef.current) {
            const Tasktitle = noteRef.current.getTitle();
            document.getElementById("TitleId")!.innerText = Tasktitle || "";
        }
    }, [noteRef]);

    return (
        <div className="bg-gray-800 dark:bg-gray-200">
            <div className="font-white dark:font-black" id="TitleId">
            </div>
        </div>
    );
}
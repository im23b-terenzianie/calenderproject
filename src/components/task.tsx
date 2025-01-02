import React, {useRef} from 'react';
import Note, {NoteRef} from "@/src/components/note";
export default function Task() {
    function handleGetTitle() {
        if (noteRef.current){
            return noteRef.current.getTitle();
        }
    }
    const noteRef = useRef<NoteRef>(null);
    return (
        <div className="bg-gray-800 dark:bg-gray-200">
            <div className="font-white dark:font-black">

            </div>
        </div>
    );
}
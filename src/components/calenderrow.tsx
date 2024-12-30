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
        <div className="grid grid-cols-7 ">
            <div className="border-b-2 border-l-2 border-t-2">Monday</div>
            <div className="border-b-2 border-l-2 border-t-2">Tuesday</div>
            <div className="border-b-2 border-l-2 border-t-2">Wednesday</div>
            <div className="border-b-2 border-l-2 border-t-2">Thursday</div>
            <div className="border-b-2 border-l-2 border-t-2">Friday</div>
            <div className="border-b-2 border-l-2 border-t-2">Saturday</div>
            <div className="border-b-2 border-l-2 border-t-2">Sunday</div>
        </div>
    <div className="grid grid-cols-7">
        <div className="border-b-2 border-l-2 h-32 flex justify-between Datecell" id="cell1" onClick={handleCellClick}></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell2"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell3"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell4"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell5"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell6"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell7"></div>
    </div>
    <div className="grid grid-cols-7">
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell8"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell9"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell10"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell11"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell12"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell13"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell14"></div>
    </div>
    <div className="grid grid-cols-7">
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell15"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell16"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell17"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell18"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell19"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell20"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell21"></div>
    </div>
    <div className="grid grid-cols-7">
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell22"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell23"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell24"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell25"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell26"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell27"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell28"></div>
    </div>
    <div className="grid grid-cols-7">
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell29"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell30"></div>
        <div className="border-b-2 border-l-2  h-32 Datecell" id="cell31"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell32"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell33"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell34"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell35"></div>
    </div>
    <div className="grid grid-cols-7">
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell36"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell37"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell38"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell39"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell40"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell41"></div>
        <div className="border-b-2 border-l-2 h-32 Datecell" id="cell42"></div>
    </div>
    </div>
);

}
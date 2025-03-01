
import Baseloggedin from "@/app/src/layout/Baseloggedin";
import Calenderrows from "@/app/src/components/calenderrow";
import Monthbutton from "@/app/src/components/monthbutton";
import Todolist from "@/app/src/components/todolist";

export default function Calendar() {
    return (
        <div>
            <Baseloggedin>
                <div className="grid columns-3">
                    <div className="col-start-2">
                        <Monthbutton/>
                    </div>
                    <div className="col-start-3">
                        <Todolist/>
                    </div>
                </div>
                <Calenderrows/>
            </Baseloggedin>
        </div>

    );
}
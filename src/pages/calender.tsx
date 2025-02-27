import Base from "@/src/layout/Base";
import Baseloggedin from "@/src/layout/Baseloggedin";
import Calenderrows from "@/src/components/calenderrow";
import Monthbutton from "@/src/components/monthbutton";
import Todolist from "@/src/components/todolist";

export default function Calender() {
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
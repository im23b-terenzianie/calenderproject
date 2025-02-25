import Base from "@/src/layout/Base";
import Baseloggedin from "@/src/layout/Baseloggedin";
import Calenderrows from "@/src/components/calenderrow";
import Monthbutton from "@/src/components/monthbutton";
import Todolist from "@/src/components/todolist";

export default function Calender() {
    return (
        <div>
            <Baseloggedin>
                <div>
                    <div >
                        <Monthbutton/>
                    </div>
                    <div>
                        <Todolist/>
                    </div>
                </div>
                <Calenderrows/>
            </Baseloggedin>
        </div>

    );
}
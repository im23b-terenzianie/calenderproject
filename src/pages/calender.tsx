import Base from "@/src/layout/Base";
import Baseloggedin from "@/src/layout/Baseloggedin";
import Calenderrows from "@/src/components/calenderrow";
import Monthbutton from "@/src/components/monthbutton";

export default function Calender() {
    return (
        <div>
            <Baseloggedin>
                <Monthbutton/>
                <Calenderrows/>
            </Baseloggedin>
        </div>

    );
}
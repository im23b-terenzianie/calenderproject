import '../../app/globals.css';
import Link from "next/link";

export default function Login() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-black p-5 rounded-lg dark:bg-white">
                <h1 className="text-2xl text-white text-center dark:text-black">Login</h1>
                <div className="flex flex-col">
                    <label className="text-white dark:text-black">Username</label>
                    <input className="p-2 mb-3 bg-gray-800 rounded-lg dark:bg-gray-200" type="text" />
                </div>
                <div className="flex flex-col">
                    <label className="text-white dark:text-black">Password</label>
                    <input className="p-2 mb-3 bg-gray-800 rounded-lg dark:bg-gray-200" type="password" />
                </div>
                <div className="flex justify-between">
                <Link className="p-2 bg-gray-800 rounded-lg dark:bg-gray-200 text-black" type="submit" href="/calender" >Login</Link>
                <Link href="/register" className="p-2 bg-gray-800 rounded-lg dark:bg-gray-200 text-black">Register</Link>

            </div>
        </div>
    </div>
    );
}
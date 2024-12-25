import '../../app/globals.css';
import Link from "next/link";
import { useEffect, useRef } from "react";
import {router} from "next/client";


export default function Register() {
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const repeatPasswordRef = useRef<HTMLInputElement | null>(null);

    function passwordvalidation() {
        const pw = passwordRef.current;
        const rpw = repeatPasswordRef.current;
        const status = document.getElementById("password-status");

        if (pw && rpw && status) {
            const match = pw.value === rpw.value;
            status.textContent = match
                ? "Passwords match."
                : "Passwords do not match.";
        }
    }


        useEffect(() => {
        const pw = passwordRef.current;
        const rpw = repeatPasswordRef.current;

        if (pw && rpw) {
            pw.addEventListener("input", passwordvalidation);
            rpw.addEventListener("input", passwordvalidation);
        }

        return () => {
            if (pw && rpw) {
                pw.removeEventListener("input", passwordvalidation);
                rpw.removeEventListener("input", passwordvalidation);
            }
        };
    }, []);

    return (

        <div className="flex justify-center items-center h-screen">
            <div className="bg-black p-5 rounded-lg dark:bg-white">
                <h1 className="text-2xl text-white text-center dark:text-black">Register</h1>
                <div className="flex flex-col">
                    <label className="text-white dark:text-black">Username</label>
                    <input
                        className="p-2 mb-3 bg-gray-800 rounded-lg border-gray-800 dark:bg-gray-200 text-black dark:border-gray-200"
                        type="text"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-white dark:text-black">Password</label>
                    <input
                        id="password"
                        ref={passwordRef}
                        className="p-2 mb-3 bg-gray-800 rounded-lg border-gray-800 dark:bg-gray-200 text-black dark:border-gray-200"
                        type="password"
                    />
                    <label className="text-white dark:text-black">Repeat Password</label>
                    <input
                        id="repeatpassword"
                        ref={repeatPasswordRef}
                        className="p-2 mb-3 bg-gray-800 rounded-lg border-gray-800 dark:bg-gray-200 text-black dark:border-gray-200"
                        type="password"
                    />
                </div>
                <div id="password-status" className="text-white dark:text-black"></div>
                <button
                    className="p-2 bg-gray-800 rounded-lg dark:bg-gray-200 text-black"
                    type="submit"
                    onClick={() => {
                        const pw = passwordRef.current;
                        const rpw = repeatPasswordRef.current;
                        if (pw && rpw){
                            if (pw === rpw) {
                                router.push("/calender");
                            } else {
                                router.push("/register");
                            }

                        }
                    }
                }
                >
                    Register
                </button>
            </div>
        </div>

    );
}

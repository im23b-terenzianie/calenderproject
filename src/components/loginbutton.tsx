import '../../app/globals.css';
import Link from "next/link";

export default function Login() {
    return (
        <Link href="/login" className="border-2 rounded border-yellow-300 mx-5 p-0.5 bg-yellow-300 dark: text-black">
            Login
        </Link>
    );
}
import '../../app/globals.css';
import { login, signup } from './action';

export default function Login() {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-200 dark:bg-gray-700">
            <div className="bg-black p-5 rounded-lg dark:bg-white">
                <h1 className="text-2xl text-white text-center dark:text-black">Login</h1>
                <form>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-white dark:text-black">Email:</label>
                        <input id="email" name="email" type="email" required className="p-2 mb-3 bg-gray-800 rounded-lg dark:bg-gray-200" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-white dark:text-black">Password:</label>
                        <input id="password" name="password" type="password" required className="p-2 mb-3 bg-gray-800 rounded-lg dark:bg-gray-200" />
                    </div>
                    <div className="flex justify-between">
                        <button formAction={login} className="p-2 bg-gray-800 rounded-lg dark:bg-gray-200 text-black">Log in</button>
                        <button formAction={signup} className="p-2 bg-gray-800 rounded-lg dark:bg-gray-200 text-black">Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
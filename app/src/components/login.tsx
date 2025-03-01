'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/supabaseClient';
import { signup } from '@/lib/auth';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();
    useEffect(() => {
        if (isLoggedIn) {
            router.push('/calendar');
        }
    }, [isLoggedIn, router]);

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            setError(error.message);
        } else {
            setError(null);
            setIsLoggedIn(true); // Setze den Login-Status, um die Weiterleitung zu triggern
        }
    };

    const handleSignup = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await signup(email, password);
            setError(null);
            setIsLoggedIn(true);
        } catch (err) {
            const error = err as { message: string };
            setError(error.message);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-200 dark:bg-gray-700">
            <div className="bg-black p-5 rounded-lg dark:bg-white">
                <h1 className="text-2xl text-white text-center dark:text-black">Login</h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleLogin}>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-white dark:text-black">Email:</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="p-2 mb-3 bg-gray-800 rounded-lg dark:bg-gray-200"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-white dark:text-black">Password:</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="p-2 mb-3 bg-gray-800 rounded-lg dark:bg-gray-200 text-black"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-between">
                        <button type="submit" className="p-2 bg-gray-800 rounded-lg dark:bg-gray-200 text-black">Log in</button>
                        <button type="button" onClick={handleSignup} className="p-2 bg-gray-800 rounded-lg dark:bg-gray-200 text-black">Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

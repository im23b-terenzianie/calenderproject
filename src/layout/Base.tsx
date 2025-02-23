import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';
import '../../app/globals.css';
import Login from '../components/loginbutton';
import Logo from '../components/Logo';

interface LayoutProps {
    children: ReactNode;
}

export default function Base({ children }: LayoutProps) {
    return (
        <div className="bg-gray-200 dark:bg-gray-700 app">
            <nav className="flex justify-between items-center bg-gray-800 p-2 ">
                <ul className="flex items-center">
                    <li>
                        <Link href="/" className="dark:text-black">
                            <Logo />
                        </Link>
                    </li>
                </ul>
                <ul className="flex items-center">
                    <li>
                        <Login />
                    </li>
                </ul>
            </nav>
            <main>{children}</main>
            <footer className="bg-gray-800 p-2 text-center">
                <p>Made by Enzo Terenziani</p>
            </footer>
        </div>
    );
}

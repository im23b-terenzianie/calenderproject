import Link from 'next/link';
import {ReactNode} from 'react';
import '../../globals.css';
import Logo from '../components/Logo';
interface LayoutProps {
    children: ReactNode;
}

export default function Base({children}: LayoutProps) {
    return (
        <div className="app">
            <nav className="flex justify-between items-center bg-gray-800 p-2 ">
                <ul className="flex items-center">
                    <li>
                        <Link href="/public" className="dark:text-black">
                            <Logo />
                        </Link>
                    </li>
                </ul>
            </nav>
            {/* Hauptinhalt */}
            <main className="bg-white dark:bg-gray-700">{children}</main>
            {/* Footer */}
            <footer className="bg-gray-800 p-2 text-center ">
                <p>Made by Enzo Terenziani</p>
            </footer>
        </div>
    );
}
import Link from 'next/link';
import Image from 'next/image';
import {ReactNode} from 'react';
import '../../app/globals.css';
import Login from '../components/loginbutton';
interface LayoutProps {
    children: ReactNode;
}

export default function Base({children}: LayoutProps) {
    return (
        <div className="app">
            <nav className="flex justify-between items-center bg-black p-2 dark:bg-white">
                <ul className="flex items-center">
                    <li>
                        <Link href="/" className="dark:text-black">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={50}
                                height={50}
                                className="cursor-pointer"
                            />
                        </Link>
                    </li>
                </ul>
                <ul className="flex items-center">
                    <li>
                        <Login />
                    </li>
                </ul>
            </nav>
            {/* Hauptinhalt */}
            <main>{children}</main>
            {/* Footer */}
            <footer className="bg-black p-2 text-center dark:bg-white text-black">
                <p>© 2021 All rights reserved</p>
            </footer>
        </div>
    );
}

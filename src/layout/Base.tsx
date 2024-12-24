import Link from 'next/link';
import Image from 'next/image';
import {ReactNode} from 'react';
import '../../app/globals.css';

interface LayoutProps {
    children: ReactNode;
}

export default function Base({children}: LayoutProps) {
    return (
        <div className="app">
            <nav className="flex justify-between items-center bg-stone-400 p-2">
                <ul className="flex items-center">
                    <li>
                        <Link href="/">
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
                        <Link href="/login" className="border-2 rounded border-yellow-300 mx-5 p-0.5 bg-yellow-300">
                                Login
                        </Link>
                    </li>
                </ul>
            </nav>
            {/* Hauptinhalt */}
            <main>{children}</main>
            {/* Footer */}
            <footer className="bg-stone-400 p-2 text-center">
                <p>© 2021 All rights reserved</p>
            </footer>
        </div>
    );
}

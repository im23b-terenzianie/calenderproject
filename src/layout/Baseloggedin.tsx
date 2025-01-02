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
            </nav>
            {/* Hauptinhalt */}
            <main>{children}</main>
            {/* Footer */}
            <footer className="bg-black p-2 text-center dark:bg-white text-black">
                <p>Made by Enzo Terenziani</p>
            </footer>
        </div>
    );
}
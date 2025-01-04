import React from 'react';

export default function Logo() {
    return (
        <div className="flex items-center justify-center bg-gray-800">
            <div className="text-center">
                <div className="relative inline-flex items-center space-x-2">
                    <span className="font-bold text-white text-4xl">C</span>
                    <span className="font-bold text-gray-400 text-4xl">C</span>
                </div>
                <div className="mt-2">
                    <span className="uppercase text-white text-l tracking-widest">Calendar</span>
                </div>
            </div>
        </div>
    );
}
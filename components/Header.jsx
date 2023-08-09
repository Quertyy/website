'use client'

import React from 'react';
import { useState } from 'react';

const Header = () => {
    return (
        <header className="flex justify-between items-start pt-10 pb-4 px-8 border-green border-b border-dashed text-gray-t">
            <div className='pb-6'>
                <h1 className="text-7xl font-bold text-green blur-[0.75px]" style={{ fontFamily: 'Modeseven' }}>QUERTY
                    <div className="inline-block pl-4">
                        <span className="cursor-blink bg-green h-[3.25rem] w-[2rem] block ml-[0.25rem]"></span>
                    </div>
                </h1>
                <nav className="mt-4 text-xl">
                    <span>[</span>
                    <a href="/" className="ml-4 mr-4 hover:blur-xs hover:text-green tracking-widest">Home</a>
                    <span>||</span>
                    <a href="/projects" className="ml-4 mr-4 hover:blur-xs hover:text-green tracking-widest">Projects</a>
                    <span>||</span>
                    <a href="/career" className="ml-4 mr-4 hover:blur-xs hover:text-green tracking-widest">Career</a>
                    <span>]</span>
                </nav>
            </div>
                <div className="flex items-center space-x-3 font-bold mt-2">
                    <a href="/fr" className="text-2xl">FR</a>
                    <p className='text-lg'>||</p>
                    <a href="/en" className="text-2xl">EN</a>
            </div>
      </header>
    )
}

export default Header;
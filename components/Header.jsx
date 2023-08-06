'use client'

import React from 'react';
import { useState } from 'react';

const Header = () => {
    return (
        <header className="flex justify-between items-start pt-10 pb-4 px-8 border-green border-b border-dashed">
            <div className='pb-6'>
                <img src="querty-01.svg" alt="Logo" className="h-13 w-auto" />
                <nav className="mt-4 text-xl">
                    <span>[</span>
                    <a href="/" className="ml-4 mr-4 hover:blur-xs hover:text-green-400 tracking-widest">Home</a>
                    <span>||</span>
                    <a href="/projects" className="ml-4 mr-4 hover:blur-xs hover:text-green-400 tracking-widest">Projects</a>
                    <span>||</span>
                    <a href="/career" className="ml-4 mr-4 hover:blur-xs hover:text-green-400 tracking-widest">Career</a>
                    <span>]</span>
                </nav>
            </div>
                <div className="flex items-center space-x-4 text-3xl font-bold">
                    <a href="/fr" className="text-sm">FR</a>
                    <span>||</span>
                    <a href="/en" className="text-sm">EN</a>
            </div>
      </header>
    )
  }

export default Header;
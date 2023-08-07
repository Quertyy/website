import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-bgblack text-white flex items-center justify-between py-4 px-8 mt-auto">
            <div className="max-w-screen-md mx-auto flex justify-between w-full">
            <p className="text-md">Copyright 2023 //{'>'}{'>'} Querty</p>
                <div className="flex space-x-4">
                    <p className="text-md">Find me on </p>
                    <a href="https://twitter.com/quertyeth" target="_blank"><img src="twitter.svg" alt="Twitter" className="h-8 w-auto" /></a>
                    <a href="mailto:quuertyy@protonmail.com" target="_blank"><img src="mail.svg" alt="Contact" className="h-8 w-auto" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-bgblack text-lg flex items-center justify-between py-4 px-8 md:flex sticky top-[100vh]">
            <div className="max-w-screen-md mx-auto flex justify-between w-full tracking-wider">
            <p>Copyright 2023 //{'>>'} Querty</p>
                <div className="flex space-x-4">
                    <p>Find me on </p>
                    <a href="https://twitter.com/quertyeth" target="_blank"><img src="twitter.svg" alt="Twitter" className="h-8 w-auto" /></a>
                    <a href="mailto:quuertyy@protonmail.com" target="_blank"><img src="mail.svg" alt="Contact" className="h-8 w-auto" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
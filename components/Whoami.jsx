import React from 'react';

const Whoami = () => {
    return (
        <div className="py-5">
            <h1 className="text-3xl font-bold">
                <span className="text-green">Whoami</span> {'{'}
            </h1>
            <h2 className="text-2xl text-gray-t font-bold pt-2">// Querty, pentester and blockchain developer</h2>
            <div className="pl-5 py-6">
                <p className="text-md">Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
                <p className="text-md">sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
            </div>
            <h1 className="text-3xl mb-8 font-bold">{'}'}</h1>
            <div className="relative flex py-4 items-center">
                <div className="flex-grow border-t border-green"></div>
                <div className="inline-block pl-1 relative">
                    <span className="cursor-blink bg-green h-[22px] w-[10px] block ml-[0.25rem] absolute bottom-[-1px]"></span>
                </div>
            </div>

        </div>
      );
      
}

export default Whoami;
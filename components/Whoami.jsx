import React from 'react';

const Whoami = () => {
    return (
        <div className="py-5">
          <h1 className="text-3xl font-bold text-green">Whoami {'{'}</h1>
          <h2 className="text-2xl text-gray-t font-bold py-4">// Querty</h2>
          <div className="pl-5">
            <p className="text-md">Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
            <p className="text-md">sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
          </div>
          <h1 className="text-3xl font-bold py-4">{'}'}</h1>
        </div>
      );
      
}

export default Whoami;
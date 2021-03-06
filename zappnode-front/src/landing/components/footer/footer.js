import React from 'react';

const Footer = props => {
    // complete footer page
    return(
        <footer className="border-top flex-wrap py-10 flex justify-between text-primary bg-secondary text-gray-800 text-base">
        <div className="flex flex-col ml-2 mb-5">
        <h2 className="text-xl font-bold">Company</h2>
        <p className="mt-2">203 Fake St. Mountain View, San Francisco, California, USA</p>
        <p className="mt-2"> +100930040404</p>
        <p className="mt-2">info@yourdomain.com</p>            
        </div>

        <div className="flex flex-col ml-2 mb-5">
        <h2 className="text-xl font-bold">Useful links</h2>
        <p className="mt-2">Blog</p>
        <p className="mt-2">Status Page</p>
        <p className="mt-2">Useful links</p>
        <p className="mt-2">Docs</p>
        <p className="mt-2">Enroll</p>            
        </div>

        
        <div className="flex flex-col mb-5 mr-8">
        <h2 className="text-xl font-bold">Navigation</h2>
        <p className="mt-2">Home</p>
        <p className="mt-2">Domain</p>
        <p className="mt-2">About</p>    
        <p className="mt-2">Contact</p> 
        <p className="mt-2">Blog</p>        
        </div>
        </footer>
    )
}

export default Footer;
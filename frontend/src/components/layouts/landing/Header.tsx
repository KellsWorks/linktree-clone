import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../../assets/nav-header.svg'


export default function Header() {

    const headers = new Array<string>('Templates', 'Marketplace', 'Discover', 'Pricing', 'Learn')

    return (
        <div className='w-full justify-center  absolute mx-auto '>
            <div className='max-w-7xl bg-white mx-auto flex items-center justify-between rounded-full px-10 py-3 mt-5'>
                <div className="flex items-center space-x-10">
                    <Link to={'/'}>
                        <img src={Logo} className='object-cover h-6' alt='linktree-logo'/>
                    </Link>
                    <nav className="flex items-center space-x-4 text-gray-500">
                        {headers.map((header, index) => (
                            <Link key={index} to={'#'} className="hover:bg-gray-100 px-4 py-2 font-medium hover:rounded">
                                {header}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className='flex items-center space-x-4'>
                    <Link to='/admin' className="bg-gray-100 rounded-md font-semibold p-5">
                        Admin
                    </Link>
                    <button className="rounded-full bg-gray-800 text-white text-center p-5">
                        Log out
                    </button>
                </div>
            </div>
        </div>
    )
}

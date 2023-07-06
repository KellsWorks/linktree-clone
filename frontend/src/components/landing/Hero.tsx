import React from 'react'

export default function Hero() {
    return (
        <div className="bg-green-900">
            <div className='max-w-7xl mx-auto justify-center  h-screen'>
                <div className="grid grid-cols-2 gap-10 py-36">
                    <div className="col-span-1 flex flex-col space-y-5">
                        <h3 className='text-7xl font-bold text-lime-400'>Everything you are. In one, simple link in bio.</h3>
                        <p className='text-xl font-semibold text-lime-400'>Join 35M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
                        <div className="flex items-center space-x-4">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                linktr.ee/
                            </div>
                            <input placeholder="yourname" type="text"  id="email-address-icon" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-20 p-5  "/>
                        </div>
                        <button className="bg-purple-200 rounded-full p-4">
                            Claim your Linktree
                        </button>
                        </div>
                    </div>
                    <div className="col-span-1">

                    </div>
                </div>
            </div>
        </div>

    )
}

import React from 'react'
import { Link } from 'react-router-dom'
import { BoltIcon, ChartBarIcon, Cog6ToothIcon, LinkIcon, PaintBrushIcon, PlusIcon } from '@heroicons/react/24/solid'
import { ShareIcon, MegaphoneIcon } from '@heroicons/react/24/outline'

export default function index() {
    return (
        <div className='bg-gray-100 h-screen p-3'>
            <div className="rounded-full w-full px-3 py-3 flex items-center justify-between bg-white shadow">
                <div className="flex items-center space-x-5">
                    <Link to={'/'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" height={25}><title>Linktree Logo</title><desc>Linktree Logo Symbol</desc><path d="M13.5108 5.85343L17.5158 1.73642L19.8404 4.11701L15.6393 8.12199H21.5488V11.4268H15.6113L19.8404 15.5345L17.5158 17.8684L11.7744 12.099L6.03299 17.8684L3.70842 15.5438L7.93745 11.4361H2V8.12199H7.90944L3.70842 4.11701L6.03299 1.73642L10.038 5.85343V0H13.5108V5.85343ZM10.038 16.16H13.5108V24.0019H10.038V16.16Z" fill="#000"></path></svg>
                    </Link>
                    <button className='flex items-center space-x-1.5 rounded-md py-1.5 px-4 hover:bg-gray-100 transition duration-150'>
                        <LinkIcon className='w-4 h-4' />
                        <p>Links</p>
                    </button>
                    <button className='flex items-center space-x-1.5 rounded-md py-1.5 px-4 hover:bg-gray-100 transition duration-150'>
                        <PaintBrushIcon className='w-4 h-4' />
                        <p>Appearance</p>
                    </button>
                    <button className='flex items-center space-x-1.5 rounded-md py-1.5 px-4 hover:bg-gray-100 transition duration-150'>
                        <ChartBarIcon className='w-4 h-4' />
                        <p>Analytics</p>
                    </button>
                    <button className='flex items-center space-x-1.5 rounded-md py-1.5 px-4 hover:bg-gray-100 transition duration-150'>
                        <Cog6ToothIcon className='w-4 h-4' />
                        <p>Settings</p>
                    </button>
                </div>
                <div className="flex items-center space-x-3">
                    <button className='flex items-center space-x-1.5 rounded-md py-1.5 px-4 hover:bg-gray-100 transition duration-150'>
                        <MegaphoneIcon className='w-5 h-5 text-purple-500' />
                    </button>
                    <button className='flex bg-gray-100 items-center space-x-1.5 rounded-full py-1.5 px-4 hover:bg-gray-100 transition duration-150'>
                        <BoltIcon className='w-4 h-4' />
                        <p className='text-black font-semibold'>Try Pro for Free!</p>
                    </button>
                    <div className="rounded-full border py-1.5 px-4 flex items-center space-x-5">
                        <p>linktre.ee/someusername</p>
                        <button className='hover:bg-gray-100 hover:rounded-full'>
                            <ShareIcon className='w-5 h-5' />
                        </button>
                    </div>
                    <div className="rounded-full bg-gray-500 text-black text-center justify-center p-2 h-10 w-10">
                        K
                    </div>
                </div>
            </div>
            <div className="gw-full h-full overflow-y-hidden">
                <div>
                    <div className="max-w-2xl mx-auto justify-center mt-10">
                        <button className="flex font-medium p-3 w-full items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 rounded-full text-white transition-duration-150">
                            <PlusIcon className='w-5 h-5 mr-2' />
                            Add link
                        </button>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi repellat doloremque et ipsa, natus ad magnam quod ratione inventore at ex corrupti minus sed vitae quis, nostrum nulla esse obcaecati!
                    </div>
                </div>
            </div>
        </div>
    )
}

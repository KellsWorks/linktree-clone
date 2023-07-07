import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUturnRightIcon, BoltIcon, LinkIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { ShareIcon, MegaphoneIcon, ArrowUpOnSquareIcon, Cog6ToothIcon, ChartBarIcon, PaintBrushIcon, PencilIcon, PhotoIcon, StarIcon, CalendarDaysIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import CoreInput from '../../components/CoreInput'
import CoreButton from '../../components/CoreButton'
import '../../additional-styles/switch.css'

import HeaderIcon from '../../assets/header.svg'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import ApiService from '../services/ApiService'

import { ToastContainer, toast } from 'react-toastify';

const interests = new Array<{ name: String, imageUrl: any }>(
    {
        name: 'Mobile App',
        imageUrl: 'https://link-types-assets.production.linktr.ee/mobile-app/icon.svg'
    },
    {
        name: 'Gleam',
        imageUrl: 'https://link-types-assets.production.linktr.ee/gleam/icon.svg'
    },
    {
        name: 'Video',
        imageUrl: 'https://link-types-assets.production.linktr.ee/video/icon.svg'
    },
    {
        name: 'Header',
        imageUrl: HeaderIcon
    },
    {
        name: 'Twitter',
        imageUrl: 'https://link-types-assets.production.linktr.ee/twitter/icon.svg'
    },
    {
        name: 'TikTok Video',
        imageUrl: 'https://link-types-assets.production.linktr.ee/tiktok-video/icon.svg'
    }
)
const AdminPage = () => {

    const [isTitleEditing, setIsTitleEditing] = useState<boolean>(false);
    const [isWeblinkEditing, setWeblinkEditing] = useState<boolean>(false);

    const [newWeblink, setNewWeblink] = useState<string>('')

    const [title, setTitle] = useState<string>('Job Finder Malawi - Malawian Jobs, Tenders & Opportunities');
    const [weblink, setWeblink] = useState('jobfindermalawi');

    const [newTitle, setNewTitle] = useState<string>('')

    const [showAdd, setShowAdd] = useState<boolean>(false);

    const auth = useSelector((state: RootState) => state.auth);

    const [loading, setLoading] = useState<boolean>(false);

    const handleIconClick = () => {
        setIsTitleEditing(true);
    };

    const handleWeblinkIconClick = () => {
        setWeblinkEditing(true);
    }

    const handleInputBlur = () => {
        setIsTitleEditing(false);
        setWeblinkEditing(false);
    };

    const handleInputChange = (e: { target: { value: string } }) => {
        setTitle(e.target.value);
    };

    const handleWeblinkChange = (e: { target: { value: string } }) => {
        setWeblink(e.target.value);
    };

    const handleAddWeblink = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        setLoading(true)

        ApiService.post('weblink/add', {
            "title" : newWeblink,
            "link" : newWeblink
        })
        .then((response) => {
            console.log(response)
            toast.success('Weblink added successfully!', {
                position: toast.POSITION.TOP_RIGHT,
                delay: 3000
            });
            setLoading(false)
            setWeblink("")
            setShowAdd(false)
        })
        .catch((error) => {
            toast.error('Unexpected error occurred, please try again!', {
                position: toast.POSITION.TOP_RIGHT,
                delay: 3000
            });
            setLoading(false)
            setShowAdd(false)
        })

    }

    return (
        <>
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
                            <p>linktre.ee/{auth.username}</p>
                            <button className='hover:bg-gray-100 hover:rounded-full'>
                                <ShareIcon className='w-5 h-5' />
                            </button>
                        </div>
                        <div className="uppercase rounded-full bg-gray-500 text-black text-center justify-center p-2 h-10 w-10">
                            {auth.username?.charAt(0)}
                        </div>
                    </div>
                </div>
                <div className="gw-full h-full overflow-y-hidden">
                    <div>
                        <div className="max-w-2xl mx-auto justify-center mt-10">

                            {!showAdd && <button onClick={() => setShowAdd(!showAdd)} className="flex font-medium p-3 w-full items-center justify-center space-x-2 bg-purple-700 hover:bg-purple-800 rounded-full text-white transition-duration-150">
                                <PlusIcon className='w-5 h-5 mr-2' />
                                Add link
                            </button>}

                            {showAdd && <div className="bg-white rounded-2xl mt-10 transform transition-all duration-150" >
                                <div className='px-5 py-5'>
                                    <div className="flex items-center justify-between">
                                        <h3 className='font-semibold'>Enter URL</h3>
                                        <button onClick={() => setShowAdd(!showAdd)}>
                                            <XMarkIcon className='w-5 h-5' />
                                        </button>
                                    </div>
                                    <form onSubmit={(e) => handleAddWeblink(e)} className="w-full flex items-center space-x-5 mt-5">
                                        <CoreInput required={true} type={'text'} label={'URL'} value={newWeblink} onChange={(e) => setNewWeblink(e.target.value)} />
                                        <div className="w-20">
                                            <CoreButton text={'Add'} type={'submit'} color={'primary'} loading={loading} />
                                        </div>
                                    </form>
                                </div>
                                <div className="border-t mt-5 py-10 px-5">
                                    <div className="flex items-center justify-between">
                                        <h3 className='font-semibold text-gray-500'>Inspired by your interests</h3>
                                        <button className='text-purple-600 font-medium hover:text-purple-700 hover:underline transition duration-150'>View all &rarr;</button>
                                    </div>
                                    <div className="mt-3 grid grid-cols-6 gap-4">
                                        {interests.map((interest, index) => (
                                            <div key={index} className="flex flex-col space-y-2 justify-center items-center">
                                                <div className='rounded-2xl bg-gray-100 px-3 py-3'>
                                                    <img className='w-10 h-10' src={interest.imageUrl} alt={`${interest.name.toLowerCase()}-icon`} />
                                                </div>
                                                <p className="text-sm font-medium">{interest.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            }

                            <div className={showAdd ? `blur-sm mt-10` : `mt-10 blur-0`}>
                                <div className="rounded-2xl bg-white px-5 py-5">
                                    <div className="flex items-center justify-between">
                                        <div className="w-full space-y-2">
                                            {isTitleEditing ? (
                                                <input
                                                    type="text"
                                                    className="w-full font-medium focus:outline-none focus:ring-none"
                                                    value={title}
                                                    onChange={handleInputChange}
                                                    onBlur={handleInputBlur}
                                                    autoFocus
                                                />
                                            ) : (
                                                <h3 className="flex items-center font-medium">
                                                    {title}
                                                    <button onClick={handleIconClick}>
                                                        <PencilIcon className='w-5 h-5 ml-2' />
                                                    </button>
                                                </h3>
                                            )}
                                            {isWeblinkEditing ? (
                                                <input
                                                    type="text"
                                                    className="focus:outline-none focus:ring-none"
                                                    value={weblink}
                                                    onChange={handleWeblinkChange}
                                                    onBlur={handleInputBlur}
                                                />
                                            ) : (
                                                <p className="flex items-center font-medium">
                                                    {weblink}
                                                    <button onClick={handleWeblinkIconClick}>
                                                        <PencilIcon className='w-5 h-5 ml-2' />
                                                    </button>
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <ArrowUpOnSquareIcon className='w-5 h-5 text-gray-600' />
                                            <label className="switch">
                                                <input type="checkbox" />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>

                                    </div>
                                    <div className="flex items-center w-full mt-4">
                                        <div className="flex items-center space-x-3 text-gray-500">
                                            <button>
                                                <ArrowUturnRightIcon className='w-5 h-5' />
                                            </button>
                                            <button>
                                                <PhotoIcon className='w-5 h-5' />
                                            </button>
                                            <button>
                                                <StarIcon className='w-5 h-5' />
                                            </button>
                                            <button>
                                                <CalendarDaysIcon className='w-5 h-5' />
                                            </button>
                                            <button>
                                                <LockClosedIcon className='w-5 h-5' />
                                            </button>
                                            <button>
                                                <ChartBarIcon className='w-5 h-5' />
                                            </button>
                                            <div className='flex items-center'>
                                                0 clicks
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}


export default AdminPage;

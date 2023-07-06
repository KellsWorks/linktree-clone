import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ChevronRightIcon, EllipsisHorizontalIcon, LinkIcon, XMarkIcon } from '@heroicons/react/24/solid'

import FacebookIcon from '../../assets/facebook.png'
import WhatsappIcon from '../../assets/whatsapp.png'
import LinkedInIcon from '../../assets/linkedin.png'
import MessengerIcon from '../../assets/messenger.png'
import TwitterIcon from '../../assets/twitter.png'
import EmailIcon from '../../assets/apple.png'

import Icon from '../../assets/linktree.svg'
import { Link } from 'react-router-dom'

export default function Account() {

    const [isOpen, setIsOpen] = useState(true)

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    const links = new Array<{ title: string, imageUrl: any }>(
        {
            title: 'Share on Facebook',
            imageUrl: FacebookIcon
        },
        {
            title: 'Share on LinkedIn',
            imageUrl: LinkedInIcon
        },
        {
            title: 'Share on Twitter',
            imageUrl: TwitterIcon
        }, {
        title: 'Share via WhatsApp',
        imageUrl: WhatsappIcon
    },
        {
            title: 'Share via Messenger',
            imageUrl: MessengerIcon
        },
        {
            title: 'Share via Email',
            imageUrl: EmailIcon
        }
    )

    return (
        <div className='mx-auto max-w-4xl justify-center py-5'>
            <div className="flex justify-end">
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-full bg-gray-100 w-10 h-10 flex items-center justify-center px-2 py-2 text-sm text-gray-500 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    <div className="w-5 h-5">
                        <EllipsisHorizontalIcon className="w-full h-full" />
                    </div>
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="p-6 flex items-center justify-between text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Share this Linktree
                                        <button onClick={closeModal}>
                                            <XMarkIcon className='w-5 h-5' />
                                        </button>
                                    </Dialog.Title>
                                    <div className="space-y-6 pl-6 pr-6">
                                        {links.map((link, index) => (
                                            <div key={index} className="hover:bg-gray-100 hover:rounded transition duration-150 p-3 flex items-center justify-between">
                                                <div className="flex items-center space-x-2">
                                                    <img src={link.imageUrl} alt='facebook-icon' className='w-6 h-6' />
                                                    <p className='font-semibold'>{link.title}</p>
                                                </div>
                                                <button>
                                                    <ChevronRightIcon className='w-5 h-5' />
                                                </button>
                                            </div>
                                        ))}
                                        <div>
                                            <div className="flex items-center justify-between border rounded-md p-4">
                                                <div className="flex items-center space-x-2">
                                                    <img src={Icon} alt="linktree-icon" className='w-6 h-6' />
                                                    <p>linktr.ee/someusername</p>
                                                </div>
                                                <button>
                                                    Copy
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 border-t p-4">

                                        <h3 className='font-semibold text-black'>Create your own Linktree</h3>

                                        <p className='text-gray-500 text-sm'>The only link in bio trusted by 35M+ people.</p>

                                        <Link to={'/register'}>
                                            <button className='w-full text-center mt-3 text-white font-white font-semibold bg-black rounded-full p-3'>
                                                Sign up free
                                            </button>
                                        </Link>

                                        <Link to={'#'}>
                                            <button className='w-full border hover:bg-gray-100 transition duration-150 text-center mt-3 text-black font-white font-semibold bg-white rounded-full p-3'>
                                                Find out more
                                            </button>
                                        </Link>

                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            <div className='flex flex-col items-center justify-center'>

                <img src={Icon} alt="user-icon" className='w-10 h-10' />

                <div className='mt-5'>
                    <h3 className='font-bold text-xl text-center'>Tappa SA</h3>
                    <p className='font-medium text-center'>South Africas Leading NFC smart business card manufacturer</p>
                </div>

                {/* weblink buttons */}
                <div className='w-1/2 mt-10 space-y-3'>
                    {Array(10).fill(10).map((i) => (
                        <button key={i} className="bg-orange-600 rounded-full py-3 text-white text-center items-center font-medium w-full hover:bg-transparent hover:text-orange-600 hover:border-4 transition duration-150 hover:border-orange-600 flex justify-around">
                            <LinkIcon className='w-6 h-6' />
                            <p>Visit our website</p>
                            <EllipsisHorizontalIcon className='w-8 h-5' />
                        </button>
                    ))}
                </div>

            </div>
        </div>
    )
}

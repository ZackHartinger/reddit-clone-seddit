import React, { useState } from 'react'
import Dashboard from '../Dashboard/Dashboard'
const Navbar = ({ toggleModal }: { toggleModal: () => void }) => {
    const [showDashboard, setShowDashboard] = useState<boolean>(false);

    const [searchText, setSearchText] = useState<string>('');
    const toggleDashboard = () => {
        setShowDashboard(!showDashboard);
    }

    const clearSearchText = () => {
        setSearchText('');
    }

    console.log(searchText);

    return (
        <nav className='bg-[#0e1113] sticky top-0'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 border-b-2 border-b-[#3e4042]'>
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                        <button onClick={toggleDashboard} type='button' className='lg:hidden relative inline-flex items-center justify-center rounded-full p-2 text-gray-400 cursor-pointer hover:bg-zinc-800' aria-controls='mobile-menu' aria-expanded='false' data-collapse-toggle='mobile-menu'>
                            {!showDashboard ?
                                <svg className="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg> :
                                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>

                            }
                        </button>
                    </div>
                    <div className="flex flex-1 w-screen ml-6 grow items-center justify-center overflow-visible sm:items-stretch sm:justify-start lg:ml-0">
                        <div className="flex shrink-0 items-center ml-3 mr-1">
                            <img className="h-8 w-auto px-1" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                            <span className='hidden md:inline text-white text-xl font-bold px-4'>seddit</span>
                        </div>
                        <div className="flex grow space-x-1 gap-2">
                            <div className="flex shrink items-center rounded-full flex-auto h-10 bg-[#2a3236]">
                                <span className='p-3'>
                                    <svg aria-hidden="true" fill="white" height="16" icon-name="search-outline" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.916 17.717 15.2 14.042a8.043 8.043 0 1 0-1.053 1.069l3.709 3.672a.75.75 0 0 0 1.056-1.066h.004ZM2.5 9a6.5 6.5 0 1 1 11.229 4.446.695.695 0 0 0-.116.077.752.752 0 0 0-.086.132A6.492 6.492 0 0 1 2.5 9Z"></path>
                                    </svg>
                                </span>
                                <input type="text" className='w-30 md:grow text-white shrink overflow-auto !outline-none' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                                {searchText ?
                                    <button className='cursor-pointer' onClick={clearSearchText}>
                                        <svg className='mr-3' fill="white" height="16" icon-name="clear-outline" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 18.75A8.75 8.75 0 1 1 18.75 10 8.76 8.76 0 0 1 10 18.75Zm3.567-11.433L10.884 10l2.683 2.683-.884.884L10 10.884l-2.683 2.683-.884-.884L9.116 10 6.433 7.317l.884-.884L10 9.116l2.683-2.683.884.884Z"></path>
                                        </svg>
                                    </button>
                                    :
                                    <></>
                                }
                            </div>
                            <button type='button' onClick={toggleModal} className='rounded-full bg-[#6366f1] text-white px-3 shrink-0 cursor-pointer'>Log In</button>
                            <button className='w-auto shrink-0 items-center pr-2'>
                                <svg fill="white" height="20" icon-name="overflow-horizontal-outline" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.75 10a1.751 1.751 0 1 1-3.502.003A1.751 1.751 0 0 1 5.75 10ZM10 8.25a1.75 1.75 0 1 0-.003 3.502A1.75 1.75 0 0 0 10 8.25Zm6 0a1.751 1.751 0 1 0-.002 3.502A1.751 1.751 0 0 0 16 8.25Z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {showDashboard ?
                <div className="lg:hidden absolute w-screen bg-[rgba(0,0,0,0.4)]">
                    <Dashboard />
                </div>
                :
                <></>
            }
        </nav>
    )
}

export default Navbar
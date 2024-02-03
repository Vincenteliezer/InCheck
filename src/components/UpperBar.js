import React from 'react'
import { BsGear, BsList, BsMenuButton } from 'react-icons/bs'
import SearchBar from './reusable/SearchBar'
import Avator from './reusable/Avator'
import signImage from '/public/images/signImage.png'


export default function UpperBar() {
    return (
        <div className='px-6 py-4 grid grid-cols-12 gap-6 content-center sticky top-0 bg-[#f6f8fc] z-50'>
            <div className='flex items-center space-x-3 col-span-3'>
                <button className='h-30 w-30 hover:bg-gray-200 w-fit p-2 rounded-full'>
                    <BsList size={26} />
                </button>
                <div>
                    <h3 className='text-xl font-semibold'>InCheck</h3>
                </div>
            </div>

            <div className='col-span-6'>
                <SearchBar />
            </div>

            <div className='col-span-3 flex items-center space-x-4 justify-end'>
                <div className='bg-[#eaf1fb] px-5 py-3 rounded-3xl'>
                    <h2 className='text-sm font-light'>Ksh 20,000</h2>
                </div>
                <div className='flex items-center justify-items-end space-x-6'>
                    <BsGear size={26} color='gray' />
                    <Avator src={signImage} alt="Profile Avator" />
                </div>
            </div>
        </div>
    )
}

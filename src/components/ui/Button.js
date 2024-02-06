import React from 'react'

export default function Button({ children, onClick }) {
    return (
        <button className='flex space-x-3 hover:bg-[#eaf1fb] px-5 py-2 rounded-lg active:scale-95 sticky top-12 w-full' onClick={onClick}>
            {children}
        </button>
    )
}

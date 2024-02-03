import React from 'react'
import Image from 'next/image'


export default function Avator({src, alt}) {
    return (
        <Image src={src} alt={alt} className='h-10 w-10 rounded-full' />
    )
}

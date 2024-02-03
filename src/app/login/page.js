"use client"
import { Button } from '@/components/ui/button';
import { useUserAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import React from 'react'
import Image from 'next/image'
import signImage from '/public/images/signImage.png'
import { BsGoogle } from "react-icons/bs";


export default function Login() {
    const { googleSignIn } = useUserAuth();
    const router = useRouter();

    const handleLogin = async () => {
        try {
            await googleSignIn();
            router.replace('/dashboard')
        } catch (error) {
            console.error(error.message);
        }
    };
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <div className='flex flex-col items-center space-y-3 min-w-3.5 border p-6 rounded-xl'>
                <h2>WELCOME TO INCHECK</h2>
                <Image alt='Avator' src={signImage} className='h-[150px] w-auto rounded-full' placeholder='blur' />

                <p className='text-xs'>Login with google</p>
                <Button onClick={handleLogin}>
                    <BsGoogle size={18} color='white' />
                    <div className='mx-5 text-base'>Google</div>
                </Button>
            </div>
        </div>
    )
}

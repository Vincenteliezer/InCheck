"use client"
import MainGrid from '@/components/MainGrid';
import UpperBar from '@/components/UpperBar';
import { useUserAuth } from '@/context/AuthContext';
import React from 'react'

export default function Dashboard() {
    const { user, logout } = useUserAuth();

    if (!user) {
        return null;
    }
    return (
        <main className='bg-[#f6f8fc] h-screen'>
            <MainGrid />
        </main>
    )
}

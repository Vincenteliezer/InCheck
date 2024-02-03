"use client"
import { Button } from '@/components/ui/button';
import { useUserAuth } from '@/context/AuthContext';
import React from 'react'

export default function Dashboard() {
    const { user, logout } = useUserAuth();

    if (!user) {
        return null;
    }
    return (
        <main className='p-5'>
            <h3 className='text-xl my-6'>{user?.displayName}</h3>
            <Button onClick={logout}>
                Click me
            </Button>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius natus fuga mollitia vel odit impedit non ducimus exercitationem rerum, debitis tenetur officiis saepe ab sint voluptates, excepturi delectus! Non sit magni mollitia sapiente iste! Nisi molestiae minima debitis rem dolore repudiandae similique! Est doloremque veniam, tenetur id perferendis quas incidunt dignissimos. Quis odit quo quod neque, excepturi sit veniam, ut minus et reiciendis sint temporibus sapiente deleniti dolore minima! Consectetur, temporibus reprehenderit ipsum voluptate eos officia, repellat sapiente debitis, quidem nobis ab fuga saepe. Adipisci sapiente quidem doloribus? Ex reprehenderit unde quos, doloribus excepturi officia iure consequuntur aspernatur assumenda non.</p>
        </main>
    )
}

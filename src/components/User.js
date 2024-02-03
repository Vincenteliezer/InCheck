"use client"
import { useUserAuth } from '@/context/AuthContext';
import React from 'react'

export default function User() {
    const { user } = useUserAuth();

    console.log("USER", user);
  return (
      <>
          <div>{user.displayName}</div>
          <div>{user.email}</div>
      </>
  )
}

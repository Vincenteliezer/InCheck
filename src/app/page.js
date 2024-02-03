"use client"
import Link from 'next/link'
export default function Home() {

  return(
    <main className="p-24">

      <h1 className='text-2xl'>HOMEPAGE</h1>
      <Link href='/login'>
        <button className='p-4 rounded bg-black text-white text-xl'>
          TO LOGIN
        </button>
      </Link>

    </main>
  );
}


import Image from 'next/image';
import React from 'react';

type NavbarProps = {
    id:number
    logo:string
    hasUserSection:boolean
    mainColor:string
};

const Navbar:React.FC<NavbarProps> = () => {
    
    return (
        <div className='w-full flex items-center justify-between p-5 bg-blue-950 gap-5'>
            <Image
             src='https://img.innoloft.com/logo.svg'
             height={100}
             width={100}
             alt='Logo'/>
             <input
              type='text'
              placeholder='Enter interests, keywords,company e.t.c'
              className='rounded flex-1 px-3 py-2 cursor-pointer lg:flex hidden'/>
              <div className='flex'>
              <Image
               className='inline-block h-6 w-6 rounded-full ring-2 ring-white'
               src='https://img.innoloft.com/logo.svg'
               height={50}
               width={50}
               alt='User'/>
              </div>
        </div>
    )
}
export default Navbar;
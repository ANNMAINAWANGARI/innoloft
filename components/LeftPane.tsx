import React from 'react';
import UserInfo from './UserInfo';
import Link from 'next/link';
import { LuHome, LuPackage } from "react-icons/lu";
import GetProduct from '@/lib/GetProduct';
import { Product } from '@/types';

type LeftPaneProps = {
    profilePicture:string,
    firstName:string,
    lastName:string,
    position:string,
};

const LeftPane:React.FC<LeftPaneProps> = ({profilePicture,firstName,lastName,position}) => {
    
    return (
        
            <div className='rounded bg-gray-200 p-2  hidden lg:flex flex-col lg:basis-1/5 gap-3'>
        <UserInfo 
        profilePicture={profilePicture} 
        firstName={firstName}
        lastName={lastName} 
        position={position}/>
        <div className='flex flex-col gap-3'>
            <span className='flex items-center gap-2 text-sm'>
                <LuHome/>
                <Link href='/'>Home</Link>
            </span>
            <span className='flex items-center gap-2 text-sm'>
                <LuPackage />
                <Link href='/products'>Products</Link>
            </span>
            
            
        </div>
            </div>
        
    )
}
export default LeftPane;
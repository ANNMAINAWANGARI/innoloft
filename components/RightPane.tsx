'use client'
import Image from 'next/image';
import React from 'react';
import { LuChevronRight, LuHome, LuMapPin } from "react-icons/lu";
import UserInfo from './UserInfo';
import Link from 'next/link';
import GetSlug from '@/hooks/useSlugParam';
import Editor from './Editor';


type RightPaneProps = {
    title ?:string,
    description:string,
    video:string,
    profilePicture:string,
    firstName:string,
    lastName:string,
    position:string,
    picture:string
    city:string
    street:string
    country:string
    companyLogo:string
};

const RightPane:React.FC<RightPaneProps> = ({title,picture,description,firstName,lastName,profilePicture,position, city,street,country,companyLogo}) => {
    let  {url_pathname,params}= GetSlug()
    let pathname =`/product/${params.productId}/edit`
    console.log(url_pathname,params,pathname)
    return (
        <div className=' flex flex-col gap-5 lg:basis-4/5 '>
         <span className='flex justify-between'>
            <h6 className='flex items-center gap-2 text-gray-600 text-sm'>
            <LuHome/>
            <LuChevronRight/>
            {/* SHOULD CHANGE TO DYNAMIC LINK */}
            <span>Products</span>
            <LuChevronRight/>
            {title ? <span>{title}</span>:<span>Product</span>}
            </h6>
            <Link href={pathname} className='bg-blue-900 p-3 text-white rounded'>Edit</Link>
         </span>
         <div className='flex bg-white flex-col md:flex-row border-gray-200 border-solid border-2'>
          <div className='basis-4/5 border-gray-100 border-solid border-2'>
            
            <Image
             src={picture}
             
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
             height={200}
             width={300}
             alt='Product'
             className='rounded'/>
            <div className='bg-white p-3 border-gray-200 border-solid border-t-2 w-full'>
            {url_pathname == pathname ?
             (<div className='max-w-full'>
             
             <Editor/>
             </div>):(
                <p className='text-gray-600'>{description}</p>
             )
            }
             
            </div>
          </div>
          {/**end */}
          <div className='basis-1/5  '>
            <h5 className='mb-2 mt-2 text-sm text-gray-600'>Offered By</h5>
            <Image
            className='mb-2'
            src={companyLogo}
            height={50}
            width={150}
            alt='Company Logo'/>
            <UserInfo profilePicture={profilePicture} firstName={firstName} lastName={lastName} position={position}/>

            <div className='flex  gap-2 text-gray-500 mt-3'>
                <LuMapPin/>
                <div className='flex flex-col'>
                    <span className='text-sm'>{street}</span>
                    <span className='text-sm'>{city} {country}</span>
                </div>
            </div>
            <Image src={profilePicture} 
            height={200}
            width={200}
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt='map'/>
          </div>
            
         </div>
        </div>
    )
}
export default RightPane;
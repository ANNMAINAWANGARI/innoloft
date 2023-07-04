import Image from 'next/image';
import React from 'react';

type UserInfoProps = {
    profilePicture:string,
    firstName:string,
    lastName:string,
    position:string,
};

const UserInfo:React.FC<UserInfoProps> = ({profilePicture,firstName,lastName,position}) => {
    
    return (
        <div className='flex gap-2'>
         
            <Image
            className='flex h-5 w-5 rounded-full ring-2 ring-white'
            src={profilePicture}
            height={50}
            width={50}
            alt='User'/>
         
           
            
            <div className='flex flex-col'>
                <h6 className='text-black text-sm'>{firstName} {lastName}</h6>
                <h6 className='text-gray-500 text-xs '>{position}</h6>
            </div>
        </div>
    )
}
export default UserInfo;
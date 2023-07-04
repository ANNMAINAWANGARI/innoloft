import { BusinessModel, Categories } from '@/types';
import React, { ReactNode } from 'react';
import { IconType } from 'react-icons/lib';

type FooterSubComponentProps = {
    icon:IconType
    children:ReactNode
    sub_title:string
    label:  BusinessModel[] |string |Categories[]
};

const FooterSubComponent:React.FC<FooterSubComponentProps> = ({sub_title,icon,label,children}) => {
    const Icon = icon;
    return (<div className='flex gap-2'>
        <Icon/>
        <div className='flex flex-col gap-1'>
            <p className='text-blue-700'>{sub_title}</p>
            
            {children}
        </div>
    </div>)
}
export default FooterSubComponent;
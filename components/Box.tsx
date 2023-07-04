import React, { ReactNode } from 'react';

type BoxProps = {
    children:ReactNode
    title:string
};

const Box:React.FC<BoxProps> = ({children,title}) => {
    
    return (
    <div className='flex flex-col container  bg-white p-3   mx-auto my-2'>
        <p className='text-black'>{title}</p>
        <div className='flex items-center justify-center'>{children}</div>
        </div>)
}
export default Box;
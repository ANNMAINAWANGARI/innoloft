import React from 'react';
import GetProduct from '@/lib/GetProduct';
import { Product, TRL } from '@/types';
import LeftPane from '@/components/LeftPane';
import RightPane from '@/components/RightPane';
import Box from '@/components/Box';
import GetTRL from '@/lib/GetAllTRL';

type Params = {
    params:{
        productId:string
    }
};

const EditPage:React.FC<Params> =async ({params:{productId}}:Params) => {
    const trls:Promise<TRL[]> = await GetTRL()
 const productData: Promise<Product> =await  GetProduct(productId)
 console.log(trls)
    return (
        <>
        <div className='flex container   mx-auto p-2 gap-3 '>
      <LeftPane
        profilePicture={(await productData).user.profilePicture}
        firstName={(await productData).user.firstName}
        lastName={(await productData).user.lastName}
        position={(await productData).user.position}/>
      <RightPane 
      picture={(await productData).picture}
      title={(await productData).name}
      description={(await productData).description}
      video={(await productData).video}
      profilePicture={(await productData).user.profilePicture}
      firstName={(await productData).user.firstName}
      lastName={(await productData).user.lastName}
      position={(await productData).user.position}
      city ={(await productData).company.address.city.name}
      street = {(await productData).company.address.street}
      companyLogo = {(await productData).company.logo}
      country = {(await productData).company.address.country.name}/>
      
    </div>
    <Box title='Video'>
        <input placeholder=' upload vimeo link' type='text' className='rounded border-2 flex-1 p-2'/>
    </Box>
    <Box title='Offer Details'>
        <select name='trl' className='bg-gray-400'>
         {(await trls).map(trl=><option key={trl.id} value={trl.name}>{trl.name}</option>)}
        </select>
    </Box>
    </>
    )
}
export default EditPage;
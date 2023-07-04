import RightPane from '@/components/RightPane';
import React from 'react';
import GetProduct from '@/lib/GetProduct';
import { Product } from '@/types';
import LeftPane from '@/components/LeftPane';
import Box from '@/components/Box';
import { LuClock2,LuCog,LuGem,LuSettings } from 'react-icons/lu';
import FooterSubComponent from '@/components/FooterSubComponent';
import GetTRL from '@/lib/GetAllTRL';
type Params = {
    params:{
        productId:string
    }
};

const ProductPage:React.FC<Params> =async ({params:{productId}}:Params) => {
    const productData: Promise<Product> =await  GetProduct(productId)
    let categories = (await productData).categories
    let businessModels = (await productData).businessModels
    return (
      <>
        <div className='flex container   mx-auto p-2 gap-3'>
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
      <video width="50%" height="240" controls>
        <source src={(await productData).video} type="video/mp4"></source>
        
      </video>
      
    </Box>
    <Box title='Offer Details'>
      <div className='flex flex-wrap'>
        <FooterSubComponent sub_title='Technology' icon={LuCog} label={(await productData).categories}>
        {categories.map(cat=><p key={cat.id}
            className='rounded bg-gray-400'>{cat.name}</p>)}
        </FooterSubComponent>
        <FooterSubComponent sub_title='Business Model' icon={LuGem} label={(await productData).businessModels}>
        {businessModels.map(cat=><p key={cat.id}
            className='rounded bg-gray-400'>{cat.name}</p>)}
        </FooterSubComponent>
        <FooterSubComponent sub_title='Costs' icon={LuClock2} label={(await productData).investmentEffort}>
        <p className='rounded bg-gray-400'>{(await productData).investmentEffort}</p>
        </FooterSubComponent>
        <FooterSubComponent sub_title='TRL' icon={LuSettings} label={(await productData).trl.name}>
        <p className='rounded bg-gray-400'>{(await productData).trl.name}</p>
        </FooterSubComponent>
      </div>
    </Box>
    </>
    )
}
export default ProductPage;
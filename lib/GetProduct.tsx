import React from 'react'



export default async function GetProduct(productId:string) {
    let productAPI = process.env.product_endpoint;
    const res = await fetch(`${productAPI}/${productId}`)
    if(!res.ok) throw new Error('failed to fetch product')
    console.log('res',res)
    return res.json()
}
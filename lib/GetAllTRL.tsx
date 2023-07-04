import React from 'react'

type Props = {
    
}

export default async function GetTRL() {
    let trlAPI = process.env.trl_endpoint;
    const res = await fetch(`${trlAPI}`)
    if(!res.ok) throw new Error('failed to fetch trl')
    console.log('res',res)
    return res.json()
}
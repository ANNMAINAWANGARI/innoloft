import React from 'react'

type Props = {
    
}

export default async function GetConfiguration() {
    let appid = process.env.APP_ID || 1
    let conigurationAPI = process.env.configuration_endpoint;
    const res = await fetch(`${conigurationAPI}/${appid}`)
    if(!res.ok) throw new Error('failed to fetch config')
    console.log('res',res)
    return res.json()
}
'use client'

import { useParams } from 'next/navigation'
import { usePathname } from 'next/navigation'

export default function GetSlug(){
    
    const params = useParams()
    const url_pathname = usePathname()
    return {url_pathname, params};

}
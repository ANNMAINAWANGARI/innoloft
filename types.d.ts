export type TRL  = {
id:number
name:string
description:string|null
}
export type Configuration = {
id:number
logo:string
mainColor:string
hasUserSection:boolean
}
type Type = {
    id:number
    name:string
}
export type Categories = {
    id:number
    name:string
}
export type TRL = {
    id:number
    name:string
}
export type User = {
    id:number
    email:string
    firstName:string
    lastName:string
    sex:number
    profilePicture:string
    position:string
}

export type Address ={
    country:{
        name:string
    }
    city:{
        name:string
    }
    street:string
    house:string
    zipCode:string
    longitude:string
    latitude:string
}
export type Company = {
    name:string
    logo:string
    address:Address
}


export type BusinessModel = {
    id:number
    name:string
}

export type Product ={
id:number
name:string
description:string
picture:string
type:Type
implementationEffortText:string |null
investmentEffort:string
categories: Categories []
trl:TRL
video:string
user:User
company:Company
businessModels:BusinessModel []
}
//商品カテゴリ
export type Category = 'shoes' | 'clothes'|'book'
//商品状態
export type Condition = 'new' | 'used'

//ユーザー
export type Product = {
    id:number
    userName:string
    displayName:string
    email:string
    profileImageUrl:string
    description:string
}

//商品
export type Product = {
    id:number
    category:Category
    title:string
    description:string
    imageUrl:string
    blueDataUrl:string
    price:number
    condition:Condition
    owner: User
}

//API Content
export type ApiContext = {
    apiRootUrl:string
}
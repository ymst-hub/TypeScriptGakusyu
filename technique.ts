/*
Optional Chaining
nullやundefinedを処理できる
?
*/
interface User2{
    name:string
    social?:{//?のこと
        facebook:boolean
        twitter:boolean
    }
}
let user2:User2
user2 = {name:'You',social:{facebook:true,twitter:true}}
console.log(user2.social?.facebook)
user2 = {name: 'You'}
console.log(user2.social?.facebook)//これはOK

/*
Non-null  Assertion Operator
オプションで --strictNullChecksを指定する場合null可能性があるとエラーとなる
明示的にnullでもOKとしたい時に使用する
!
*/
function processUser(user3?:User2){//NullでもOK
    let s = user3!.name//エラーにならない
}
/*
型ガード
switchなどで型をチェックした時、その分岐以降で型を絞られる
asを使用するよりも安全に欠ける
*/
function addOne(valueA:number|string){
    if(typeof valueA === 'string'){
        return Number(valueA) + 1//ここでnumber型の取り扱いをしたため、以降はnumber型として取り扱われる
    }
    return valueA + 1
}
console.log(addOne(10))//11
console.log(addOne('20'))//21

//オプショナルプロパティでinfoを定義する
type User4 = {
    info?:{
        name:string;
        age:number;
    }
}
let res = {}
//レスポンスはAPIのレスポンスが想定、User4にアサーションする
const user4 = (res as any) as User4
//オプショナルへの型ガードを行う
if(user4.info){
    console.log(user4.info.name)
}

/*
keyofオペレータ
型が持つプロパティの型のUnionを返せる
*/
interface User5{
    name:string;
    age:number;
    email:string;
}
type UserKey = keyof User5 //'name' | 'age' | 'email'のUnion型
const key1 : UserKey = 'name'
//const key2 : UserKey = 'phone'//エラーになる
//T[K]により対応する型が戻り値の型になる
//use → 戻り値はnumber
function getProperty<T,K extends keyof T>(obj:T,key:K):T[K]{
    return obj[key]
}
const user5:User5 = {
    name:'You',
    age:23,
    email:'xxxyyyyzzzz'
}
const userName = getProperty(user5,'name')
//const userGender = getProperty(user5,'gender')//ないためエラー

/*
インデックス型
オブジェクトのプロパティが可変の時まとめられる
*/

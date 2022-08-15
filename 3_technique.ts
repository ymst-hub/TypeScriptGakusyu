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
type Supportversions = {
    [env: number]: boolean;
}
//stringのプロパティに定義した場合エラーに
let version: Supportversions = {
    102: false,
    103: false,
    104: true,
    //'v105':false//エラーになる
}

/*
readonly
型エイリアス、インターフェース、クラスにおいてreadonlyは変更不可になる。
const = 変数とか
readonly = オブジェクトやクラスのプロパティに対して行うコンパイルエラーを検知できる
*/
type User6 = {
    readonly name:string;
    readonly gender:string;
}
let user6:User6 = {
    name :'You',gender:'Men'
}//初期化はOK
//user6.gender = 'Women'//エラーになる
//readonlyのジェネリック型もある
type User7 = {
    name:string;
    gender:string;
}
type UserReadOnly = Readonly<User7>
let user7:User7 = {
    name : 'You',
    gender: 'Men'
}
let userReadOnly:UserReadOnly = {
    name: 'YOU',
    gender: 'Men'
}
user7.name = 'aaa'//OK
//readonly.name = 'aaa'//NG

/*
unknown
anyと同じくどのような型にも代入できる
でも、そのままは使えず、typeofやinstantofを使用する
anyよりも安全
*/
const x:unknown = 123
const y:unknown = 'hello'
//console.log(x.toFixed(1))//エラーになる
//console.log(y.toLowerCase)//エラーになる
//型安全な状況で関数やプロパティにアクセスして実行する
if(typeof x === 'number'){
    console.log(x.toFixed(1))//OK
}
if(typeof y === 'string'){
    console.log(y.toLowerCase())//OK
}

/*
Async,Await
非同期処理ができる
*/
function fetchFromServer(id:string): Promise<{success: boolean}>{
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve({success: true})
        },100)
    })
}
//非同期処理を含むasync functionの戻り値はPromise(dartだとFuture)になる
async function asyncFunc(): Promise<string> {
    const result = await fetchFromServer('111')
    return `The result:${result.success}`
}
//async function内でしかawaitは使用できない
(async ()=>{
    const result = await asyncFunc()
    console.log(result)
})()
//Promiseとして使用する際はこの記述
asyncFunc().then(result => console.log(result))
/**
 * 型定義ファイル
 * Jsのコードを型定義ファイルを加えて型安全を確保し、Tsとして実行できるようにする
 * /hello.jsなら/hello.d.tsで型定義ファイルとして機能する
 * 
 */

/**
 * メモ欄
 * コーディングガイドを読むと良い
 */


/*
Enum型(Unionを優先すべき)
名前のついた定数セット
*/
const Direction1 = {
    'Up' : 0,
    'Down' :1,
    'Left' :2,
    'Right' :3
}
//上記と同一
enum EDirection1{
    'Up',//0
    'Down',//1
    'Left',//2
    'Right',//3
}

//enum Direcutionを参照
let edirection2 :EDirection1 = EDirection1.Left
console.log(edirection2)
//enumを代入した変数に別の型の値を代入しようとするとエラーになる

//文字列で指定
enum E2Direction1{
    Up = 'Up',//0
    Down = 'Down',//1
    Left = 'Left',//2
    Right = 'Right',//3
}
//edirection = 'Left' //stringのためエラー
const value1 = 'Down'
//文字列をEnumへ
const enumValue2 = value1 as E2Direction1
if (enumValue2 === E2Direction1.Down){
    console.log('Down is selected')
}

/*
ジェネリック型
クラスや関数において、型を抽象化できる(外部で具体的な型を指定できる)
*/
//Tがジェネリック型
class Queue<T>{
    //ジェネリック型の配列を初期化する
    private array:T[] = []
    //配列に追加
    push(item:T){
        this.array.push(item)
    }
    //最初の値を取り出す
    pop(): T | undefined{
        return this.array.shift()
    }
}
const queue = new Queue<number>()//数値型を扱うキューを生成する
queue.push(111)
queue.push(112)
/*
queue.pop('hoge')//コンパイルエラーになる(初期化した型と異なるため)
let str = 'fuga'
str = queue.pop()//strはnumber型じゃないためエラー
*/

/*
Union型とIntersection型
複数の型の和集合を意味するUnionと積集合を意味するIntersection型
Unionは定義されたやつなんでもいいよ
Intersectionは揃ってないとだめ
*/
function printId(id: number | string){//Unionで宣言
    console.log(id)
}
//numberでも正常に動作する
printId(11)
//stringでもOk
printId('22')

//型エイリアスでもOK
type Id = number | string
function printId2(id: Id){
    console.log(id)
}

//型エイリアス同志も掛け合わせられる
type Identity = {
    id:number | string;
    name: string
}
type Contact ={
    name:string;
    email:string;
    phone:string;
}
//和集合のUnion型を定義
type IdentityOrContact = Identity|Contact
//Ok
const id: IdentityOrContact = {
    id:'111',
    name:'You'
}
const contact:IdentityOrContact ={
    name:'You',
    email:'~~~@xyz.jp',
    phone:'111222333',
}
//intersection
type Employee = Identity & Contact
const employee:Employee ={
    id:'111',
    name:'You',
    email:'~~~@xyz.jp',
    phone:'111222333',//一つでも足りないとエラーになる
}

/*
リテラル型
|でデータを区切る→決まった文字や数値のみしか入らないことを意味する
数値でも使えるし、戻り値などにも使える
変数: OKのデータ|OKのデータ|~~~
*/
let postStatus:'OK'|'NG'
postStatus = 'OK'//エラーにならない
//postStatus = 'OKだよ'//エラー

/*
never型
エラー等を必ず返す関数で引数がないことを明示するために使用する
(never型じゃなければコンパイルエラー)
*/
function error(message: string):never{
    throw new Error(message)
}
function foo(x:string|number|number[]):boolean{
    if(typeof x === 'string'){
        return true
    }else if(typeof x === 'number'){
        return false
    }
    return error('never happens')
}

//switch文などと併用すると実装もれがわかりやすい
enum PageType{
    ViewProfile,
    EditProfile,
    ChangePassword,
}
const getTitleText = (type : PageType) =>{
    switch(type){
        case PageType.ViewProfile:
            return 'setting'
        case PageType.EditProfile:
            return 'Edit Profile'
        case PageType.ChangePassword:
            return 'Change Pass'
        default:
            //新規追加された際に実装もれに気づくことができる
            const wrongType: never = type
            throw new Error(`${wrongType} is not PageType`)
    }
}



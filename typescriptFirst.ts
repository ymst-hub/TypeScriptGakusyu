/*
変数
var 変数: 型 = 値
宣言したらその関数内全てで使える。再代入可能　※あまり使用されない様

let 変数: 型 = 値
宣言したらその階層以下のみ使用可能。再代入可能

const 変数: 型 = 値
宣言したらその階層以下のみ使用可能。再代入不可能
*/
/*
プリミティブ型
number,boolean,string
Jsのtypeof演算子を使用した際に表示されるものと同じ
*/

//例
function calc(isSum: boolean){
    const Teisu:number = 10000
    //Teisu++//constは代入を行おうとするとエラーになる
    let a: number = 100
    a = 1000//再代入可能
    if(isSum){
        //aが宣言されている階層以下のためOK
        let b: number = a + 1
        return b
    }else{
        var c: number = 0
    }
    return c //varのため、if内で使われていてもその関数全てで使用可能
    //return b //bはif内で作成された変数のため、コンパイルエラーになる
}

/*
配列
配列を構成する型と[]の表記を使用する
*/
//例
function hairetu(){
    const array: string[] = []
    array.push('Yu')
    //array.push(1)//配列の型が異なるためエラーになる
    //複数の型がある場合
    const Mac = ['Mac',2022]
    const MacUnion: (string|number)[] = ['Mac',2022]
    //union→stringか、numberの型が入る
    MacUnion.push("Os")//エラーにならない

    const MacTapple: [string,number] = ['Mac',2022]
    //タプル→stringとnumberが入る。追加はない
    MacTapple[1] = 2023
    //中の値は変更可能
}

/*
オブジェクト型
const 変数:{キー名:型; キー名:型;~~~} = オブジェクト
let 変数:{キー名:型; キー名:型;~~~} = オブジェクト
var 変数:{キー名:型; キー名:型;~~~} = オブジェクト
キー名と型のペアを宣言しておくと構造体ができる
*/
function object(){
    const user:{name: string; year: number;} = {
        name: 'Yu',
        year: 8,
    }
    console.log(user.name)
    console.log(user.year)
    //?をつけてオプショナル（なくても良いものを定義できる）
    const apple:{name: string; version: number;buy?: number} = {
        name: 'iPhone',
        version: 12,
        //buy: 20220501 //オプショナル型のためなくてもエラーにならない
    }
}

/*
any型
Dartでいうdynamic型
何を入れてもエラーにならない
*/
function dynamic(){
    let display:any = {buy: 20220501}
    //any型のため下記は全てエラーにならない
    display.func()
    display()
    display.size = 10000
    //型エラーが出ないため、既存の互換には使えるが、使用は控えた方がよい
}

/*
関数
function 関数名(引数:型,~~~):戻り値
*/
//function sayHelloV(name: string,greet: string):string{//greetが必須①
//function sayHelloV(name: string,greet?: string):string{//greetがなくてもOK②
function sayHelloV(name: string,greet: string = 'Hey'):string{//初期値の設定も可能③
    return '${greet} ${name}'
}
sayHelloV('YU','Hello')//Hello YU
sayHelloV('YU')// YU　①はエラーになる
//③はHey YUと表示される

//名前とフォーマット関数を引数として受け取りフォーマットを実行してコンソール出力を行う関数を定義する
function printName(firstName: string, formatter: (name: string) => string){
    console.log(formatter(firstName))
}
//アロー関数とは

//sanを末尾につける名前のフォーマットを定義する
function formatName(name: string): string{
    return '${name} san'
}
printName('Yu',formatName)// Yu san
//アロー関数の場合
let sayHello = (name: string): string => '${name} Hello'
//let 変数名 = (引数:引数の型): string => JavaScriptの式

//関数の型
function genBirdsInfo(name: string): string[]{
    return name.split(',')
}
//関数の型を利用
//(x: string) => string[]
function singBirds(birdInfo:(x: string) => string[]):string{//引数がstringで、string配列を返す関数を代入する
    return birdInfo('hato,kizi')[0] + 'piyo piyo'//birdInfoはgenBirdsInfoを代入している
}
console.log(singBirds(genBirdsInfo))//"hato piyo piyo"
//console.log(singBirds('Hey'))//型が合わないためエラーになる

/*
型
JavaScriptと互換性のある関係上
型推論がある
*/
let a = 100//今後number型として扱われる
//型アサーション（型推論を上書きする）
/*
変数 = 値 as 型
型アサーションが使用できるのは
より具体的になる型または、より汎化される型になるとき
ダメな時は一度anyに変えて２段階で行う
*/
const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement

/*
型エイリアス（型への名付け）
type 型名 = 型
*/
type name = string
type Point = {
    x:number;
    y:number;
}
function printPoint(point: Point){
    console.log('x座標は${point.x}です')
    console.log('y座標は${point.y}です')
}
printPoint({x:100,y:140})
//型があっていてもプロパティ名が異なるとエラー
//printPoint({z:40,a:21})

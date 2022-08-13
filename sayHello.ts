//tsc --strictNullChecks sayHello.ts でコンパイルできる（jsに）
//jsはnodeコマンドで実行できる node ~~~ファイル名
function sayHello1(firstName: string){
    console.log('Hello'+firstName)
}

let firstName:string = 'Yu'
sayHello1(firstName)
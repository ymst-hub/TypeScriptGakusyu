//tsc --strictNullChecks sayHello.ts でコンパイルできる（jsに）
function sayHello(firstName: string){
    console.log('Hello'+firstName)
}

let firstName:string = 'Yu'
sayHello(firstName)
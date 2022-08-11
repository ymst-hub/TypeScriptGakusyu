//tsc --strictNullChecks sayHello.ts でコンパイルできる（jsに）
function sayHello1(firstName: string){
    console.log('Hello'+firstName)
}

let firstName:string = 'Yu'
sayHello1(firstName)
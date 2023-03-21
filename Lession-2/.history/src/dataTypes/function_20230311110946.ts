// 1. Khai báo hàm (Function declaration)
function func1() {
    // Hoisting
    console.log("func1");
}

const func2 = function() {
    console.log("func2");
}

const func3 = () => {
    console.log("func3");
}

// 2. Function return
let num3: number; 
// function divide(): number {
//     return;
// }

// const showName = function(): string {
//     return;
// }

const func4 = function(): void{
    console.log("4");
}

const showError = function(): never {
    const err = new Error("Something went wrong!")
    throw err;
}

// 3. Function parameter
function divide(a: number, b: number = 1): number {
    return a / b;
}

console.log(divide(10,));


const showName = function(a:string, b:string = ""): string {
   return a + " " + b;
    
}
console.log(showName("a",));


// 4. Rest parameter

// 5. Callback
const arrs : number[] =[1,2,3,4,5]
const callMap = function(arr: number[], callback : (item: number) =>number){
    const temp = [];
    for (let i = 0; i < arr.length; i++) {
        temp.push(callback(arr[i]));
    }
    return temp;
}
const result = callMap(arrs, (item)=>{
    return item * 2;
    
})
console.log(result);

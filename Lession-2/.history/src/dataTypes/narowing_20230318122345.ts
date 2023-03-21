//union type
function printInfo(info:number | string) {
    typeof info === "number"? console.log(info) : console.log(info.charAt(0).toUpperCase() + info.slice(1))
}
printInfo(123)
printInfo("abc")
function check(student?: {name: string, age: number}) {
    if(!!student){
        return student.name
    }
}


// Union type (in)
interface User {
    // union type
    id: string | number,
    username: string,
    password: string,
    email: string,
}

interface Admin extends User {
    id: string,
    is_admin: boolean,
    level: LEVEL.MANAGER | LEVEL.STAFF
}

function login(user: User | Admin): void {
    if ("is_admin" in user && user.is_admin === true) {
        console.log("Welcome to admin");
    } else {
        console.log("Welcome to backs");
    }
}

// lap 1
const arr1 = [1, 2, 3, 4, 5];
const arr4 = ['a', 'b', 'c', 'd', 'e',1, 2, 3, 4, 5];
 function sortInfo<T>(arr: T[], callback:(a:T , b:T) => number):T[]{
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(callback(arr[i], arr[j]) < 0){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }   
    }
    return arr;
 }
sortInfo(arr4, (a, b) => a<b? -1 : 1);
// sortInfo(arr4, (a, b) => a.localeCompare(b));
console.log(arr1);
console.log(arr4);

// sortInfo(arr1, (a, b) => {
//     if(typeof a == "string" && typeof b == "string"){
//         return a.localeCompare(b);
//     }else{
//         return a - b;
//     }
// });
Enum Role = {ADMIN, READ_ONLY, AUTHOR};


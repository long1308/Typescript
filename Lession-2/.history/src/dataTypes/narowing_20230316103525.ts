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
 function sort
//union type
function printInfo(info) {
    typeof info === "number" ? console.log(info) : console.log(info.charAt(0).toUpperCase() + info.slice(1));
}
printInfo(123);
printInfo("abc");
function check(student) {
    if (!!student) {
        return student.name;
    }
}
function login(user) {
    if ("is_admin" in user && user.is_admin === true) {
        console.log("Welcome to admin");
    }
    else {
        console.log("Welcome to backs");
    }
}
// lap 1
var arr1 = [1, 2, 3, 4, 5];
var arr4 = ['a', 'b', 'c', 'd', 'e', 1, 2, 3, 4, 5];
function sortInfo(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (callback(arr[i], arr[j]) < 0) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
sortInfo(arr4, function (a, b) { return a < b ? -1 : 1; });
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

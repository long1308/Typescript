//union type
function printInfo(info) {
  typeof info === "number"
    ? console.log(info)
    : console.log(info.charAt(0).toUpperCase() + info.slice(1));
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
  } else {
    console.log("Welcome to backs");
  }
}
// lap 1
var arr1 = [1, 2, 3, 4, 5];
function sortInfo(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}
(sortInfo(arr1));

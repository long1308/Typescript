//union type
function printInfo(info:number | string) {
    typeof info === "number"? console.log(info) : console.log(info.charAt(0).toUpperCase() + info.slice(1))
}
printInfo(123)
printInfo("abc")
function check()
//aray 
var arr = [1, 2, 3];
var arr2 = ["a", "b", "c"];
var arr3 = [["a", "b"], ["c"]];
//tuples
var tuples = [1, "a"];
//enum 
var ROLE;
(function (ROLE) {
    ROLE[ROLE["ADMIN"] = 0] = "ADMIN";
    ROLE[ROLE["USER"] = 1] = "USER";
})(ROLE || (ROLE = {}));
var role = ROLE.ADMIN;
var STATUS_CODE;
(function (STATUS_CODE) {
    STATUS_CODE[STATUS_CODE["SUCCESS"] = 200] = "SUCCESS";
    STATUS_CODE[STATUS_CODE["CLIENT_ERROR"] = 400] = "CLIENT_ERROR";
    STATUS_CODE[STATUS_CODE["SERVER_ERROR"] = 500] = "SERVER_ERROR";
})(STATUS_CODE || (STATUS_CODE = {}));
var code = STATUS_CODE.SUCCESS;

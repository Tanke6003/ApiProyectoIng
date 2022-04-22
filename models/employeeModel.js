const connection = require('../connection');
//funcion para verificar que el rfc no este ya registrado en la base de datos
function verifyRfc(rfc){
    let query =  `
    select name from Employee where rfc = ?
    `
return connection.runQueryRow(query,[rfc]);
}
//funcion para registrar un nuevo empleado 
function registerEmployee({name,rfc,position,birthday,phone,salary}){
    let query =  `
        Insert Into Employee(name,rfc,position,birthday,phone,salary,status)values(?,?,?,?,?,?,1)
    `
    return connection.runQuery(query,[name,rfc,position,birthday,phone,salary]);
}
function getEmployees(id,name){
    let query =  `
    select idEmployee,name,rfc,position,birthday,phone,salary,status from Employee where idEmployee = ? or name like ? 
    `
return connection.runQuery(query,[id,name]);
}
function editEmployee({position,phone,salary,idEmployee}){
    let query =  `
        UPDATE Employee SET position = ?, phone = ?,salary = ?where idEmployee = ?;
    `
    return connection.runQuery(query,[position,phone,salary,idEmployee]);
}
function inhabiliteEmployee(idEmployee){
    let query =  `
        UPDATE Employee SET status = 0 where idEmployee = ?;
    `
    return connection.runQuery(query,[idEmployee]);
}
module.exports={
    verifyRfc,
    registerEmployee,
    getEmployees,
    editEmployee,
    inhabiliteEmployee
}
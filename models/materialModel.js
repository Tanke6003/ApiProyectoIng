const connection = require('../connection');
function getMaterials(){

    let query =  `
    SELECT idMaterial,name,description,stock FROM material 
    `
return connection.runQuery(query);
}
function searchMaterials(id,name){
    let query =  `
    SELECT idMaterial,name,description,stock FROM material WHERE idMaterial = ? OR name LIKE ?
    `
return connection.runQuery(query,[id,name]);
}
function createMaterial({name,description,stock}){
    let query =  `
        Insert Into material(name,description,stock)values(?,?,?,1)
    `
    return connection.runQuery(query,[name,description,stock]);
}
function inhabiliteMaterial({id}){
    let query =  `
    UPDATE material SET available = 0 WHERE idMaterial = ? 
`
return connection.runQuery(query,[id]);
}
function habiliteMaterial({id}){
    let query =  `
    UPDATE material SET available = 1 WHERE idMaterial = ?
`
return connection.runQuery(query,[id]);
}
function editMaterial({description,idMaterial}){
    let query =  `
        UPDATE material SET description = ? where idMaterial = ?
    `
    return connection.runQuery(query,[description,idMaterial]);
}
module.exports={
    getMaterials,
    searchMaterials,
    createMaterial,
    inhabiliteMaterial,
    habiliteMaterial,
    editMaterial
}
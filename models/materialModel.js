const Query = require('mysql/lib/protocol/sequences/Query');
const connection = require('../connection');
function getMaterials(){

    let query =  `
    SELECT idMaterial,name,description,stock FROM material 
    `
return connection.runQuery(query);
}
function searchMaterials(material,name){
    console.log(name)
    let query =  `
    SELECT idMaterial,name,description,stock FROM material WHERE idMaterial = ? OR name LIKE ?
    `
    console.log(query)
return connection.runQuery(query,[material,name]);
}

module.exports={
    getMaterials,
    searchMaterials

}
const materialModel         = require('../models/materialModel');
const constants             = require('../constants');
const PoolNamespace = require('mysql/lib/PoolNamespace');
/* async function registerMaterial(req, res) {
    try {
        //verifica que no exista un empleado registrado con el mismo rfc
        let exist = await materialModel.getMaterial(req.body.name);
        if (exist) {
            let data = {
                errorMessage: 'El nombre que quieres usar ya existe en la base de datos',
                status: false
            }
        res.send(data);
        return;
        }
        else{
            await materialModel.registerMaterial({
                name: req.body.name,
                description: req.body.description,
                stock:req.body.stock
            });
            let data = {
                status: true
            }
            res.send(data);
            console.log(req.body);           
        }
    } catch (ex) {
        console.log(ex);
        let data = {
            errorMessage: constants.CATCH_MESSAGE,
            errorData: ex,
            status: false
        }
        res.status(500).send(data);
    }
} */
async function getMaterials(req, res) {
    try {
        //verifica que no exista un empleado registrado con el mismo rfc
        if(req.body.Material!=""){
            let name = "%" + req.body.Material + "%"
            let exist = await materialModel.searchMaterials(req.body.Material,name);
            if (exist) {
                res.send(exist);
            }
            else{
                let data = {
                    errorMessage: 'no se encontraron registros',
                    status: false
                }
                res.send(data);
                return;
            }
        }
        else
        {
            console.log("no entra")
        let exist = await materialModel.getMaterials();
        if (exist) {
            res.send(exist);
        }
        else{
            let data = {
                errorMessage: 'no se encontraron registros',
                status: false
            }
            res.send(data);
            return;
        }
        }
    } catch (ex) {
        console.log(ex);
        let data = {
            errorMessage: constants.CATCH_MESSAGE,
            errorData: ex,
            status: false
        }
        res.status(500).send(data);
    }
}/* 
async function editMaterial(req, res){
    try {
        let echo = await materialModel.editMaterial({
            description: req.body.description
        });
        if(echo){
        let data = {
            status: true
        }
        res.send(data);
        console.log(req.body);
    } 
    } catch (ex) {
        console.log(ex);
        let data = {
            errorMessage: constants.CATCH_MESSAGE,
            errorData: ex,
            status: false
        }
        res.status(500).send(data);
    }
} */
module.exports={
    //registerMaterial,
    getMaterials,
    //editMaterial
}
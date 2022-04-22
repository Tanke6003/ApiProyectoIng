const employeeModel         = require('../models/employeeModel');
const constants         = require('../constants');
async function registerEmployee(req, res) {
    try {
        //verifica que no exista un empleado registrado con el mismo rfc
        let exist = await employeeModel.verifyRfc(req.body.rfc);
        if (exist) {
            let data = {
                errorMessage: 'El rfc que quieres usar ya existe en la base de datos',
                status: false
            }
        res.send(data);
        return;
        }
        else{
            await employeeModel.registerEmployee({
                name: req.body.name,
                rfc: req.body.rfc,
                position: req.body.position,
                birthday: req.body.birthday,
                phone: req.body.phone,
                salary: req.body.salary
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
}
async function getEmployees(req, res) {
    try {
        //verifica que no exista un empleado registrado con el mismo rfc
        let name = "%" + req.body.employee + "%"
        let exist = await employeeModel.getEmployees(req.body.employee,name);
        if (exist) {
            console.log(exist)
            
            let data = {
                exist
            }
            res.send(data);
        }
        else{
            let data = {
                errorMessage: 'no se encontro registro',
                status: false
            }
            res.send(data);
            return;
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
}
async function editEmployee(req, res){
    try {
        //verifica que no exista un empleado registrado con el mismo rfc
        let echo = await employeeModel.editEmployee({
            position: req.body.position,
            phone: req.body.phone,
            salary: req.body.salary,
            status: req.body.status,
            idEmployee:req.body.idEmployee,
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
}
async function inhabiliteEmployee(req, res){
    try {
        let echo = await employeeModel.inhabiliteEmployee({
            id: req.body.id
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
} 
module.exports={
    registerEmployee,
    getEmployees,
    editEmployee,
    inhabiliteEmployee
}
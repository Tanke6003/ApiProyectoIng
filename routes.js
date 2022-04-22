const materialController = require('./controllers/materialController');
const employeeController = require('./controllers/employeeController')
const loadRoutes = (app) => {
    app.post('/materials',materialController.getMaterials);
    app.post('/materials/createMaterial',materialController.createMaterial);
    app.post('/materials/material/inhabilite',materialController.inhabiliteMaterial);
    app.post('/materials/material/habilite',materialController.habiliteMaterial);
    app.post('/materials/material/edit',materialController.editMaterial);
    app.post('/employees',employeeController.getEmployees);
    app.post('/employees/registerEmployee',employeeController.registerEmployee);
    app.post('/employees/Employee/edit',employeeController.editEmployee);
    app.post('/Empleados/Employee/inabilite',employeeController.inhabiliteEmployee);
}
module.exports = {
    loadRoutes
}
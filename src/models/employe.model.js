'use strict';

var dbConn = require('./../../config/db.config');

// Employe object create

var Employe = function(employe)
{
    this.first_name = employe.first_name;
    this.last_name = employe.last_name;
    this.email = employe.email;
    this.phone = employe.phone;
    this.organization = employe.organization;
    this.designation = employe.designation;
    this.salary = employe.salary;
    this.status = employe.status ? employe.status : 1;
    this.created_at = new Date();
    this.updated_at = new Date();
};

Employe.create = function(newEmp, result){
    dbConn.query("INSERT INTO employes set ?", newEmp, function(err, res){
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Employe.findById = function(id, result){
    dbConn.query("Select * from employes where id = ?", id, function(err, res){
        if (err) {
            console.log("error: ",err);
            result(err,null);
        }else{
            result(null, res);
        }
    });
};

Employe.findAll = function(result){
    dbConn.query("Select * from employes", function(err,res){
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            console.log("employes : ", res);
            result(null, res);
        }
    });
};

Employe.update = function(id, employe, result){
    dbConn.query("UPDATE employes SET first_name=?, last_name=?, email=?, phone=?, organization=?, designation=?, salary=? WHERE id = ?",[
        employe.first_name, employe.last_name, employe.email, employe.phone, employe.organization, employe.designation, employe.salary, id
    ], function(err, res){
        if (err) {
            console.log("error: ", err);
            result(null, res);
        }else{
            result(null, res);
        }
    });
};

Employe.delete = function(id, result){
    dbConn.query("DELETE FROM employes WHERE id = ?", [id], function(err, res){
        if (err) {
            console.log("error: ", err);
            result(null, res);
        }else{
            result(null, res);
        }
    });
};

module.exports = Employe;
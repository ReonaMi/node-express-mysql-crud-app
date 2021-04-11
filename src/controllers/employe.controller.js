'use strict';

const Employe = require('../models/employe.model');

exports.findAll = function(req, res){
    Employe.findAll(function(err,employe){
        console.log("controller");
        if (err)
        res.send(err);
        console.log('res', employe);
        res.send(employe);
    });
};

exports.create = function(req, res){
    const new_employe = new Employe(req.body);
    //handles null error
    if (req.body.constructor === Object.keys(req.body).length === 0) {
        res.status(400).send({
            error: true,
            message: 'Please provide all required field'
        });
    }else{
        Employe.create(new_employe, function(err, employe){
            if(err)
            res.send(err);
            res.json({
                error: false,
                message: "Employe added sucessfully!",
                data: employe
            });
        });
    }
};

exports.findById = function(req, res){
    Employe.findById(req.params.id, function(err, employe){
        if (err)
        res.send(err);
        res.json(employe);
    });
};

exports.update = function(req, res){
    if (req.body.constructor === Object.keys(req.body).length === 0) {
        res.status(400).send({
            error: true,
            message: 'Please provide all required field'
        });
    }else{
        Employe.update(req.params.id, new Employe(req.body), function(err, employe){
            if(err)
            res.send(err);
            res.json({
                error: false,
                message: 'Employe successfully updated'
            });
        });
    }
};

exports.delete = function(req, res){
    Employe.delete(req.params.id, function(err, employe){
        if(err)
        res.send(err);
        res.json({
            error: false,
            message: 'Employe Successfully Deleted'
        });
    });
}
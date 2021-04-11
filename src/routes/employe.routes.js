const express = require('express');

const router = express.Router();

const employeController = require('../controllers/employe.controller');

// Retrive all employes
router.get('/', employeController.findAll);

// Create a new employe
router.post('/', employeController.create);

// Retrive a single employe with id
router.get('/:id', employeController.findById);

// Updated a employe with id
router.put('/:id', employeController.update);

// Delete a employe with id
router.delete('/:id', employeController.delete);

module.exports = router;

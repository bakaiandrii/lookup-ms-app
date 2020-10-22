const { Router } = require('express');

const {lookupController} = require('./controllers')

const lookupRouter = Router();

lookupRouter.post('/',lookupController.createLookup);
lookupRouter.get('/:lookupName',lookupController.getLookup);

module.exports = lookupRouter;

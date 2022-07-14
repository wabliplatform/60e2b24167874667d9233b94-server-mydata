/**
 * The VprojectsController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/VprojectsService');
const createvprojects = async (request, response) => {
  await Controller.handleRequest(request, response, service.createvprojects);
};

const deletevprojects = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletevprojects);
};

const getAllvprojects = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllvprojects);
};

const getvprojects = async (request, response) => {
  await Controller.handleRequest(request, response, service.getvprojects);
};

const updatevprojects = async (request, response) => {
  await Controller.handleRequest(request, response, service.updatevprojects);
};


module.exports = {
  createvprojects,
  deletevprojects,
  getAllvprojects,
  getvprojects,
  updatevprojects,
};

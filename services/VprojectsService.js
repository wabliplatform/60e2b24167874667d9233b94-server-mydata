/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Vprojects } = require('../models/Vprojects');

/**
* Creates the data
*
* vprojects Vprojects data to be created
* returns vprojects
* */
const createvprojects = ({ vprojects }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Vprojects(vprojects).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* vprojectsId String the Id parameter
* no response value expected for this operation
* */
const deletevprojects = ({ vprojectsId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Vprojects.findOneAndDelete({ _id:vprojectsId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllvprojects = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Vprojects.find().exec();
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* vprojectsId String the Id parameter
* returns vprojects
* */
const getvprojects = ({ vprojectsId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Vprojects.findById(vprojectsId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* vprojectsId String the Id parameter
* vprojects Vprojects data to be updated (optional)
* returns vprojects
* */
const updatevprojects = ({ vprojectsId, vprojects }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Vprojects.findOneAndUpdate({ _id:vprojectsId },vprojects).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createvprojects,
  deletevprojects,
  getAllvprojects,
  getvprojects,
  updatevprojects,
};

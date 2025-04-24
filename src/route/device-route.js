const express = require('express');
const router = express.Router();
const deviceController = require('../controller/device-controller');

router.post('/device/register', deviceController.registerDevice);
router.post('/device/:device_id/state', deviceController.postDeviceState);
router.post('/device/:device_id/machine-state', deviceController.postMachineState);
router.get('/device/:device_id/machine-state/latest', deviceController.getLatestMachineState);
router.get('/device/:device_id/states', deviceController.getDeviceStates);
router.get('/device/:device_id/states/latest', deviceController.getLatestDeviceState);

module.exports = router;

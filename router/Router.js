const express = require("express")

const router = new express.Router()

const userController = require('../controller/userController')
const regionController = require("../controller/regionController");
const areaController = require("../controller/areaController");
const commissionController = require('../controller/commissionController');


const checkPermission = require('../controller/authController/permission');

const { verifyToken } = require('../controller/authController/middleware');

const ActivityLogGeneration = require('../controller/authController/activityLogController');

// login
router.post('/login',userController.login)

router.post('/verify-otp',userController.verifyOtp)
router.post('/roles',userController.addOrUpdateRoles)

// region
router.post("/region",verifyToken,checkPermission('Add Region'), regionController.addRegion,ActivityLogGeneration('Add Region'));

router.get("/region/:regionId",verifyToken,checkPermission('View Region'), regionController.getRegion);

router.get("/regions",verifyToken,checkPermission('View Region'), regionController.getAllRegions);

router.put("/region/:regionId",verifyToken,checkPermission('Edit Region'), regionController.updateRegion,ActivityLogGeneration('Edit Region'));

router.delete("/region/:regionId",verifyToken,checkPermission('Delete Region'), regionController.deleteRegion,ActivityLogGeneration('Delete Region'));

// area
router.post("/area",verifyToken,checkPermission('Add Area'), areaController.addArea,ActivityLogGeneration('Add Area'));

router.get("/area/:areaId",verifyToken,checkPermission('View Area'), areaController.getArea);

router.get("/areas",verifyToken,checkPermission('View Area'), areaController.getAllAreas);

router.put("/area/:areaId",verifyToken,checkPermission('Edit Area'), areaController.updateArea,ActivityLogGeneration('Edit Area'));

router.delete("/area/:areaId",verifyToken,checkPermission('Delete Area'), areaController.deleteArea,ActivityLogGeneration('Delete Area'));

router.post('/commissions', verifyToken,checkPermission('Add Commission'), commissionController.addCommission,ActivityLogGeneration('Add Commission'));

router.get('/commissions/:Id',verifyToken,checkPermission('View Commission'),  commissionController.getCommission);

router.get('/commissions',verifyToken,checkPermission('View Commission'),  commissionController.getAllCommissions);

router.put('/commissions/:Id',verifyToken,checkPermission('Edit Commission'),  commissionController.updateCommission,ActivityLogGeneration('Edit Commission'));

router.delete('/commissions/:Id',verifyToken,checkPermission('Delete Commission'),  commissionController.deleteCommission,ActivityLogGeneration('Delete Commission'));

module.exports = router

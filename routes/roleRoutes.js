const express = require('express')
const router = express.Router()
const roleController = require('../controller/RoleController')
router.get('/role',roleController.getAllRoles);
router.post('/role',roleController.createRole)
router.delete('/role/:id',roleController.deleteRole)
router.get('/role/:id',roleController.getRoleById)
router.put('/role/:id',roleController.updateRole)
module.exports = router;
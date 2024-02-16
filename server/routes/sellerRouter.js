const Router = require('express')
const router = new Router
const sellerController = require('../controllers/sellerController')

router.post('/', sellerController.create)
router.get('/', sellerController.getAll)

module.exports = router
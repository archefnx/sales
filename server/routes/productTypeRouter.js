const Router = require('express')
const router = new Router
const ProductTypeController = require('../controllers/productTypeController')

router.post('/', ProductTypeController.create)
router.get('/', ProductTypeController.getAll)
router.get('/:id',)

module.exports = router
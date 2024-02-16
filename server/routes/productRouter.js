const Router = require('express')
const router = new Router
const ProductController = require('../controllers/productController')

router.post('/', ProductController.create)
router.get('/', ProductController.create)
router.get('/:id',)

module.exports = router
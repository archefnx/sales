const Router = require('express')
const router = new Router
const chequeRouter = require('./chequeRouter')
const sellerRouter = require('./sellerRouter')
const productRouter = require('./productRouter')
const productTypeRouter = require('./productTypeRouter')

router.use('/cheque', chequeRouter)
router.use('/seller', sellerRouter)
router.use('/product', productRouter)
router.use('/product_type', productTypeRouter)

module.exports = router
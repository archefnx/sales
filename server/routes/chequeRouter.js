const Router = require('express')
const router = new Router
const ChequeController = require('../controllers/chequeController')

router.post('/', ChequeController.create)
router.get('/', ChequeController.getAll)
router.get('/:id',)

module.exports = router
const {Cheque} = require('../models/models')
const {apiError} = require('../error/apiError')

class ChequetController {
    async create(req, res) {
        const { num, productId, sellerId } = req.body;

        if (!num || !productId || !sellerId) {
            apiError.badRequest('Не заданы параметры.')
        }

        const cheque = await Cheque.create({ num, productId, sellerId });
        return res.status(200).json({ cheque });
    }

    async getAll(req, res) {
        const cheques = await Cheque.findAll()
        res.status(200).json(cheques)
    }
}

module.exports = new ChequetController()
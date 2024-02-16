const {Cheque} = require('../models/models')

class ChequetController {
    async create(req, res) {
        const { name } = req.body;
        const { product_id } = req.body;
        const { seller_id } = req.body;
        
        const cheque = await Cheque.create({ name });
        return res.status(200).json({ cheque });
    }

    async getAll(req, res) {
        
    }
}

module.exports = new ChequetController()
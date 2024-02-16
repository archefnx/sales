const {Seller} = require('../models/models')

class sellerController {
    async create(req, res) {
        const { name } = req.body;
        const seller = await Seller.create({ name });
        return res.status(200).json({ seller });
    }

    async getAll(req, res) {
        const sellers = await Seller.findAll()
        return res.status(200).json(sellers)
    }
}

module.exports = new sellerController()
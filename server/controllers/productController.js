const {Product} = require('../models/models')

class ProductController {
    async create(req, res) {
        const { name } = req.body;
        const { type_id } = req.body;
        const { description } = req.body;

        const product = await Product.create({ name });
        return res.status(200).json({ product });
    }

    async getAll(req, res) {
        
    }
}

module.exports = new ProductController()
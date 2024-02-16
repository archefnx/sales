const {Product_type} = require('../models/models')

class ProductTypeController {
    async create(req, res) {
        const { name } = req.body;
        const product_type = await Product_type.create({ name });
        return res.status(200).json({ product_type });
    }

    async getAll(req, res) {
        const productTypes = await Product_type.findAll()
        return res.status(200).json(productTypes)        
    }
}

module.exports = new ProductTypeController()
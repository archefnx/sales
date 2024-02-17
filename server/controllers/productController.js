const {Product} = require('../models/models')

class ProductController {
    async create(req, res) {
        const { name, productTypeId, description } = req.body;

        const product = await Product.create({ name, productTypeId, description });
        return res.status(200).json({ product });
    }

    async getAll(req, res) {
        let { productTypeId, limit,  page} = req.query
        page = page || 1
        limit = limit || 9

        let offset = page * limit - limit 
        let products

        if (productTypeId) {
            products = await Product.findAndCountAll({where: {productTypeId}, limit, offset})
        } else {
            products = await Product.findAndCountAll(limit, offset)
        }

        // const products = await Product.findAll()
        res.status(200).json(products)
    }
}

module.exports = new ProductController()
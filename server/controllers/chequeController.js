const apiError = require('../error/apiError');
const { Cheque, Product, Seller } = require('../models/models')
 
class ChequetController {
    async create(req, res) {
        const { num, productId, sellerId } = req.body;
        return res.status(404)
        if (!num || !productId || !sellerId) {
            return apiError.badRequest('Не заданы параметры.'); 
        }

        const cheque = await Cheque.create({ num, productId, sellerId });
        return res.status(200).json({ cheque });
    }

    async getAll(req, res) {
        try {
            const cheques = await Cheque.findAll({
                attributes: ['num'],
                include: [
                    { model: Product, attributes: ['name'], as: 'product' },
                    { model: Seller, attributes: ['name'], as: 'seller' }
                ]
            });
            res.status(200).json(cheques);
        } catch (error) {
            console.error("Ошибка при выполнении запроса:", error);
            res.status(500).json({ error: "Произошла ошибка при обработке запроса" });
        }
    }
}

module.exports = new ChequetController();

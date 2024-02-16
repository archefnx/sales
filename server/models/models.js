const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Seller = sequelize.define('seller', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Product_type = sequelize.define('product_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING}
})

const Cheque = sequelize.define('cheque', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    num: {type: DataTypes.STRING, unique: true, allowNull: false}
})

Seller.hasMany(Cheque)
Cheque.belongsTo(Seller)

Product.hasMany(Cheque)
Cheque.belongsTo(Product)

Product.belongsTo(Product_type)

module.exports = {
    Seller,
    Cheque,
    Product,
    Product_type
}
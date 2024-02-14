const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const seller = sequelize.define('seller', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const product_type = sequelize.define('product_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING}
})

const cheque = sequelize.define('cheque', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    num: {type: DataTypes.STRING, unique: true, allowNull: false}
})

seller.hasMany(cheque)
cheque.belongsTo(seller)

product.hasMany(cheque)
cheque.belongsTo(product)

product.belongsTo(product_type)

module.exports = {
    seller,
    cheque,
    product,
    product_type
}
import Sequelize from 'sequelize'
import sequelize from '../db/db'

exports.Products = sequelize.define('products', {
    productID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: 'compositeIndex',
    },
    productName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    specifications: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
})
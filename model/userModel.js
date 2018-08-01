import Sequelize from 'sequelize'
import sequelize from '../db/db'

exports.User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        unique: 'compositeIndex',
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
            // is: ["^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,6})$"],
        },
        get() {
            return this.getDataValue('email');
        }
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
}, {
    getterMethods: {
        fullName() {
            return this.firstName + ' ' + this.lastName
        }
    },

    setterMethods: {
        fullName(value) {
            const names = value.split(' ');

            this.setDataValue('firstname', names.slice(0, -1).join(' '));
            this.setDataValue('lastname', names.slice(-1).join(' '));
        },
    }
},{
    tableName: 'users',
    initialAutoIncrement: 1
});
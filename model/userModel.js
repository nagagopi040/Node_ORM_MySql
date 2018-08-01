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
        },
        get() {
            return this.getDataValue('email');
        }
    },
}, {
    getterMethods: {
        fullName() {
            return this.firstName + ' ' + this.lastName
        }
    },

    setterMethods: {
        fullName(value) {
            const names = value.split(' ');

            this.setDataValue('firstName', names.slice(0, -1).join(' '));
            this.setDataValue('lastName', names.slice(-1).join(' '));
        },
    }
},{
    tableName: 'users',
    timestamps: true,
});

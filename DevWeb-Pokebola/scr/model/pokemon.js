const{Model, DataTypes } = require('sequelize');

class Pokemon extends Model{}

Pokemon.init({
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Tipo:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    Altura: {
        type: DataTypes.FLOAT,
    },
    Peso: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    NivelDePoder: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Pokemon',
    tableName: 'pokemons',
    timestamps: true,
});

modele.exports - Pokemon;
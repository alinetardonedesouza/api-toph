module.exports = (sequelize, DataTypes) => {

    const Dados = sequelize.define('Dados', {

        id: {

            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        usuarioId: {

            type: DataTypes.INTEGER,
            allowNull: false,
            references: {

                model: 'Usuarios',
                key: 'id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        },
        dados: {

            type: DataTypes.STRING,
        },
        createdAt: {

            type: DataTypes.DATE
        },
        updatedAt: {

            type: DataTypes.DATE
        },
        deletedAt: {

            type: DataTypes.DATE
        }
    },
        {
            createdAt: false,
            updatedAt: false,
            tableName: 'Dados'
        })

    Dados.associate = models => {

        Dados.belongsTo(models.Usuarios, {

            foreignKey: 'usuarioId',
            as: 'usuarios'
        })
    }

    return Dados
}
module.exports = (sequelize, DataTypes) => {

    const Usuarios = sequelize.define('Usuarios', {

        id: {

            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        email: {

            type: DataTypes.STRING,
            allowNull: false,
            validate: {

                isEmail: {

                    args: true,
                    msg: "E-mail inválido."
                }
            }
        },
        senha: {

            type: DataTypes.STRING,
            allowNull: false
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
            tableName: 'Usuarios'
        })

        Usuarios.associate = models => {

            Usuarios.hasMany(models.Dados, {
    
                foreignKey: 'usuarioId',
                as: 'dados'
            })
        }

    return Usuarios
}
module.exports = (sequelize, DataTypes) => {
    /*El define siempre recibe tres cosas un alias, las columnas de la base de datos y una configuración*/
    let alias = "Usuarios";
    /*acá ponemos cada lista de la base de datos */
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING
        },

    };
    let config = {
        /*Este aclara el nombre de la tabla */
        tableName: "usuarios",
        /*Esto hace seguimiento de fecha de actualizacion y seguimiento de los productos*/
        timestamps: false
    }
}
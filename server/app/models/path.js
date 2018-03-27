module.exports = (sequelize, DataTypes) => {
    const Path = sequelize.define("path", {
        pathId: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        lastScrapedTimestamp: {
            type: DataTypes.BIGINT,
        },
        lastSuccessfulTimestamp: {
            type: DataTypes.BIGINT,
        },
        depth: {
            type: DataTypes.INTEGER,
        },
        path: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        secure: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    });
    Path.associate = function(models) {
        Path.hasMany(models.content, {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        });
        Path.belongsTo(models.baseUrl, {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        });
    };
    return Path;
};

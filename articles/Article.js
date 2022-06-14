const Sequelize = require("sequelize");
const connection = require("../database/database");
const Catergory = require("../categories/Category");

const Article = connection.define('articles', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    slug:{
        type: Sequelize.STRING,
        allowNull: false
    },
    body:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Catergory.hasMany(Article);
Article.belongsTo(Catergory);


module.exports = Article;
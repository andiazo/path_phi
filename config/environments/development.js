module.exports = {
    PORT: process.env.PORT,
    DB: {
        username: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        host: process.env.HOST,
        dialect: process.env.DIALECT,
        logging: false
    }
};
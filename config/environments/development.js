module.exports = {
    PORT: process.env.PORT,
    DB: {
        username: process.env.USER,
        passsword: process.env.PASSWORD,
        database: process.env.DATABASE,
        host: process.env.HOST,
        dialect: process.env.DIALECT,
        loggin: false
    }
};
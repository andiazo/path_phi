module.exports = {
    PORT: process.env.PORT,
    DB: {
        username: "postgres",
        password: process.env.DB_PASSWORD,
        database: "path_phi_prod",
        host: process.env.DB_HOST,
        dialect: "postgres"
    }
};
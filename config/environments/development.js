module.exports = {
    PORT: process.env.PORT,
    DB: {
        user: "postgres",
        passsword: "mysecretpassword",
        database: "school_dev",
        host: "localhost",
        dialect: "postgres"
    }
};
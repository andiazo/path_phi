module.exports={
    PORT: process.env.PORT,
    DB:{
        user:"postgres",
        passsword:process.env.DB_PASSWORD,
        database: "school_prod",
        host: process.env.DB_HOST,
        dialect:"postgres"
    }
};
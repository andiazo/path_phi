const container = require("./api/container");
const db = container.resolve("db");

const application = container.resolve("app")

application
    .start()
    .then(async () => {
        await db.sequelize.sync();
    })
    .catch(err => {
        console.log(err);
        process.exit();
    });
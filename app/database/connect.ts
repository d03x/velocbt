import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: "mysql",
    username: "root",
    database: "test",
    password: "root",
    pool: {
        max: 5,
        min: 0,
        acquire: 30_000,
        idle: 10_000
    },

})

try {
    await sequelize.authenticate()
    console.log("DB CONNECTED");

} catch (error: any) {
    console.log("Database not connected: " + error.message);
    process.exit(1)
}

export {
    sequelize
}
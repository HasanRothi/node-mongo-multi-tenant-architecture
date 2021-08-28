const mongoose = require("mongoose");

const tenantDb = async function (req, res, next) {
    console.log('Tenant Databse')
    await mongoose.connection.close()
    await mongoose.connect( `mongodb+srv://${process.env.MONGODB_ACCOUNT}:${process.env.MONGODB_PASS}${process.env.MONGODB_CLUSTER}/${req.params.slug}?retryWrites=true&w=majority`);

    next()
}
const centralDb = async function (req, res, next) {
    console.log('Central Databse')
    await mongoose.connection.close()
    await mongoose.connect( `mongodb+srv://${process.env.MONGODB_ACCOUNT}:${process.env.MONGODB_PASS}${process.env.MONGODB_CLUSTER}/${process.env.DB_NAME}?retryWrites=true&w=majority`);
    next()
}
module.exports = {tenantDb , centralDb};

const auth = function (req, res, next) {
    console.log('Auth')
    // await mongoose.connection.close()
    // await mongoose.connect( `mongodb+srv://${process.env.MONGODB_ACCOUNT}:${process.env.MONGODB_PASS}${process.env.MONGODB_CLUSTER}/${process.env.DB_NAME}?retryWrites=true&w=majority`);
    // step 1 
    // check auth from central database to access tenant users to corresponding database
    // step 2
    // set req.database = tenant slug (which is database name )
    next()
}
const centralAuth = function (req, res, next) {
  console.log('Central Auth')
  // await mongoose.connection.close()
  // await mongoose.connect( `mongodb+srv://${process.env.MONGODB_ACCOUNT}:${process.env.MONGODB_PASS}${process.env.MONGODB_CLUSTER}/${process.env.DB_NAME}?retryWrites=true&w=majority`);
  // step 1
  // Check to access central database
  next()
}
module.exports = {auth , centralAuth};
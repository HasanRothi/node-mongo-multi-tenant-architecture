const mongoose = require("mongoose");
//connect mongodb atlas
mongoose.connect(
    `mongodb+srv://rothi:${process.env.MONGODB_PASS}@cluster0.tsmhn.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
);
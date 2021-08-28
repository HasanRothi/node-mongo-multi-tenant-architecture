const mongoose = require("mongoose");

const bookInfo = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    bookName: { type: String, required: true, unique: true },
    bookPrice : { type: String, required: true }
});
module.exports = mongoose.model("bookInfo", bookInfo);
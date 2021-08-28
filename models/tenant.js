const mongoose = require("mongoose");

const tenant = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    tenantSlug: { type: String, required: true, unique: true }
});
module.exports = mongoose.model("tenant", tenant);
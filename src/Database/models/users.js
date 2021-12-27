const { model, Schema } = require("mongoose")

const schema = new Schema({
    // General
    userId: String,
    premium: String,
    guildId: String,
    staff: {type: Boolean, default: false},

    // Mod
    moderatorId: String,
    reason: String,
    timestamp: String,

	  // Profile
	  description: {type: String, default: "use `i!desc` to set a description"}
})

module.exports = model("Users", schema)
const config = require("../../Client/Configs/config.js")
const { model, Schema } = require("mongoose")

const schema = new Schema({
    // General
    guildId: String,
    premium: {type: Boolean, default: false},
    staff: {type: Boolean, default: false},
	  prefix: {type: String, default: config.prefix},

    // Suggestions
    suggestions: {type: Boolean, default: false},
    suggestions_channel: {type: String, default: "NONE"},

	  //chatbot
	  chatbot: {type: Boolean, default: false},
    chatbot_channel: {type: String, default: "NONE"},
    
    // Auto reactions
    auto_reactions: {type: Array, default: []},

    // Auto responders
    auto_responders: {type: Array, default: []},

    
    // utils
    auto_meme: {type: Boolean, default: false},
    auto_meme_channel: {type: String, default: "NONE"},

    counting: {type: Boolean, default: false},
    counting_channel: {type: String, default: "NONE"},
    counting_last_number: {type: Number, default: 0},


    // Welcome
    welcome: {type: Boolean, default: false},
    welcome_channel: {type: String, default: "NONE"},
    welcome_dmuser: {type: Boolean, default: false},
    welcome_message: {type: String, default: "Welcome $user.mention$"},
    welcome_embed: {type: Boolean, default: false},
    
    // Leave
    leave: {type: Boolean, default: false},
    leave_channel: {type: String, default: "NONE"},
    leave_dmuser: {type: Boolean, default: false},
    leave_message: {type: String, default: "Goodbye $user.mention$"},
    leave_embed: {type: Boolean, default: false}
})

module.exports = model("Guilds", schema)
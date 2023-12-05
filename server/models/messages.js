const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');
const DateTime = require('luxon').DateTime;

const MessagesSchema = new Schema({
    post: {
        type: Schema.Types.ObjectId,
        ref: "Post",
        required: true,
    },
    username: {
        type: Schema.Types.ObjectId, 
        ref: "User", 
        required: true
    },
    content: {
        type: String, 
        required: true,
    }
    ,
    time_stamp: {
        type: Date,
        default: new Date(),
        required: true,
    }
});

MessagesSchema.virtual("formatted_date").get(function() {
    return DateTime.fromJSDate(this.time_stamp).toLocaleString(DateTime.DATETIME_FULL);
})

module.exports = mongoose.model("Message", MessagesSchema);
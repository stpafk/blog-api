const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const DateTime = require('luxon').DateTime;

const PostSchema = new Schema({
    title: {
        type: String, 
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    time_stamp: {
        type: Date,
        default: Date.now(),
        required: true,
    },
    messages: {
        type: Schema.Types.ObjectId, ref: "Message"
    },
    is_uploaded: {
        type: Boolean,
        required: true,
    }
});

PostSchema.virtual("url").get(function() {
    return "";
})

PostSchema.virtual("formatted_date").get(function() {
    return DateTime.fromJSDate(this.time_stamp).toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
})

module.exports = mongoose.Model("Post", PostSchema);
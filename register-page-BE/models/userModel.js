const mongoose = require('mongoose');

const userRegistrationSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    mobile: {
        type: Number,
        required: [true, "mobile number is required"]
    },
    workStatus: {
        type: String,
        required: [true, "work status is required"]
    },
    resume: {
        type: String,
        required: [true, "resume is required"]
    },
    newsletter: {
        type: String,
        required: [true, "newsletter is required"]
    }
}, {
    timestamps: true
}
)

module.exports = mongoose.model("registerUsers", userRegistrationSchema);
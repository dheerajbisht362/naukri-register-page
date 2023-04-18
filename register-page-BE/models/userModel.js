const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
        required: [true, "password is required"],
        min: [6, 'Must be at least 6'],
    },
    mobile: {
        type: String,
        required: [true, "mobile number is required"]
    },
    workStatus: {
        type: String,
        required: [true, "work status is required"]
    },
    city: {
        type: String,
    },
    resume: {
        type: String,
        required: [true, "resume is required"]
    },
    newsletter: {
        type: Boolean,
        required: [true, "newsletter is required"]
    }
}, {
    timestamps: true
}
)

userRegistrationSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

module.exports = mongoose.model("registerUsers", userRegistrationSchema);
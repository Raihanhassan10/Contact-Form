const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please Add A Name']
        },

        email: {
            type: String,
            required: [true, 'Please Add An E-Mail'],
            unique: true
        },

        password: {
            type: String,
            required: [true, 'Please Add A Password']
        },

    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('User', userSchema)
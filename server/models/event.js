const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
    garden: { type: Schema.Types.ObjectId, ref: 'Garden' },
    date: Date,
    users: [{ type: Schema.Types.ObjectId, ref: 'User' },]
})

const Event = mongoose.model('Event', eventSchema)
module.exports = Event

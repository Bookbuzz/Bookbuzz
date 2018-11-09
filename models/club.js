const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClubSchema = new Schema({
   clubName: {type: String, required: false},
   bookName: {type: String, required: false},
   meetingDate: {type: String, required: false},
   clubMembers: [{type: String, required: false}],
   discussions: [{type: String, required: false}]
});
const Club = mongoose.model("Club", ClubSchema);
module.exports = Club;

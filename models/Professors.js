const mongoose = require('mongoose');
const Schema = mongoose.Schema

const professorSchema = new Schema({
  id: Number,
  name: String,
  email: String,
  reply_table: [{
    thread_id: String,
    reply_flag: Boolean,
    timestamp: String,
    student_email: String,
    bcc_code: String,
    reply_status: Boolean
  }],
  semester: {
    term: String,
    total_count: Number,
    archive_table: [{
      date: String,
      daily_count: Number
    }]
  }
})

const Professor = mongoose.model('Professor', professorSchema);

module.exports = Professor
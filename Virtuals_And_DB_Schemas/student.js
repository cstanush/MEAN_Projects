var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: { type: String, required: true },
  courses: [{ type: String, ref: 'Course' }]
});

/* Returns the student's first name, which we will define
 * to be everything up to the first space in the student's name.
 * For instance, "William Bruce Bailey" -> "William" */
schema.virtual('firstName').get(function() {
  var fullName = this.name;
  var firstName = fullName.substr(0, fullName.indexOf(' '));
  return firstName;
});

/* Returns the student's last name, which we will define
 * to be everything after the last space in the student's name.
 * For instance, "William Bruce Bailey" -> "Bailey" */
schema.virtual('lastName').get(function() {
  var fullName = this.name;
  var lastSpaceIndex = fullName.lastIndexOf(' ') + 1;
  var lastName = fullName.substr(lastSpaceIndex, fullName.length);
  return lastName;
});

module.exports = schema;

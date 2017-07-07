var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MongooseUniqueValidator = require('mongoose-unique-validator');
var User = require('./user');

var schema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
});

schema.post('remove', function(message){
  User.findById(message.user, function(err, user){
    user.messages.pull(message);
    user.save();
  });
});

schema.plugin(MongooseUniqueValidator);
module.exports = mongoose.model('User', schema);

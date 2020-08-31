const mongoose = require('mongoose');
const { Schema } = mongoose; //const Schema = mongoose.Schema;
//mongoose object has a property called 'Schema'. Take the property and assigned it to the variable called 'schema'

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema); //load into mongoose

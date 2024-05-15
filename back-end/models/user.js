
const { default: mongoose } = require("mongoose");


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String, 
    monthly_income: Number,
    init_savings_balance: Number, 
  });

  const userData = mongoose.model('User', userSchema);

  module.exports = userData;
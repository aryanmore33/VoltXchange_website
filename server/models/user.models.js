const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    enum: ["consumer", "presumer"],
    required: true,
  },
  phoneNo: {
    type: String,
    required: true
  },
  meterNo: {
    type: String,
    required: true
  },
  refreshToken: String,
})

//for bcrypt
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS, 10));
  this.password = await bcrypt.hash(this.password, salt);
  next();
});


// Method to compare password
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
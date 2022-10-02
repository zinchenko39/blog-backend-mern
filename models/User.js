import mangoose from 'mongoose';

const UserSchema = new mangoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  avatarUrl: String,
}, {
  timestamps: true,
});

export default mangoose.model('User', UserSchema);
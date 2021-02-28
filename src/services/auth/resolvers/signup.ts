import { UserInputError } from 'apollo-server-express'
import User from '../../../models/user'
import bcrypt from 'bcrypt'
const SALT_ROUNDS = 12
const signup = async (_, {
  email,
  password,
  firstName,
  lastName
}) => {
  try {
    const existingUser = await User.findOne({
      email
    })
    if (existingUser) {
      throw new UserInputError('User already exists')
    }
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
    const user = await User.create({
      email,
      hashedPassword,
      firstName,
      lastName
    })
    return {
      ...user,
      id: user._id,
      hashedPassword: null
    }
  } catch (error) {
    throw error
  }
}

export default signup;
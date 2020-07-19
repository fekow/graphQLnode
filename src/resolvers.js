const User = require('./User')

// posso usar { page, perPage, filters }, ferramenta boa é o prisma

module.exports = {
  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id),
  },
  Mutation: {
    createUser: (_, { name, email }) => User.create({ name, email })
  }
}
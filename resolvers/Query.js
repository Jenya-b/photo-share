const Query = {
  me: (parent, args, { currentUser }) => currentUser,
  totalUsers: (parent, args, { db }) =>
    db.collection('users').estimatedDocumentCount(),
  allUsers: (parent, args, { db }) => db.collection('users').find().toArray(),
};

module.exports = Query;

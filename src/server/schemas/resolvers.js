const { Tech, Matchup } = require('../models/index');
import connectDB from '../config/connection';

const resolvers = {
  Query: {
    tech: async () => {
      await connectDB();

      return Tech.find({});
    },
    matchups: async (parent, { _id }) => {
      await connectDB();

      const params = _id ? { _id } : {};
      return Matchup.find(params);
    },
  },
  Mutation: {
    createMatchup: async (parent, args) => {
      await connectDB();

      const matchup = await Matchup.create(args);
      return matchup;
    },
    createVote: async (parent, { _id, techNum }) => {
      await connectDB();

      const vote = await Matchup.findOneAndUpdate(
        { _id },
        { $inc: { [`tech${techNum}_votes`]: 1 } },
        { new: true }
      );
      return vote;
    },
  },
};

module.exports = resolvers;

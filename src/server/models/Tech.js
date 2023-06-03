const { Schema, model, models } = require('mongoose');

const techSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = models.Tech || model('Tech', techSchema);
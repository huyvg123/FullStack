const mongoose = require('mongoose');

const GameChema = mongoose.Schema({
    id: String,
    numberUser: {
        user1: {
            name: String,
            point: Number,
        },
        user2: {
            name: String,
            point: Number,
        },
        user3: {
            name: String,
            point: Number,
        },
        user4: {
            name: String,
            point: Number,
        }
    },
    scores = [
        {
            round: Number,
            score_of_user: {
                user1: Number,
                user2: Number,
                user3: Number,
                user4: Number
            }
        }
    ]
});

const GameModel = mongoose.model("Game", GameChema);

const find = async function(query) {
    return await GameModel.find(query);
}

const findById = async function(id, callback) {
    return await GameModel.findOne(id);
}

const create = async function(data) {
    const newDocument = new GameModel(data);
    return await newDocument.save();
}

const update = async function(id, data) {
    return await GameModel.findByIdAndUpdate(id, {$ser:data});
}

const deleteById = async function(id) {
    return await GameModel.findByIdAndDelete(id);
}

module.exports = {
    find: find,
    findById : findById,
    create  : create,
    update : update,
    delete : deleteById
}
const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: String,
    number: Number,
    id: String,
    email: String,
    password: String
})

const UserModel = mongoose.model('User', UserSchema);

const find = async function(query) {
    return await UserModel.find(query);
}

const findById = async function(id) {
    return await UserModel.findById(id);
}

const create = async function(data) {
    const newDocument = new UserModel(data);
    return await newDocument.save();
}

const update = async function(id, data) {
    return await UserModel.findByIdAndUpdate(id, {$ser:data});
}

const deleteOne = async function(id) {
    return await UserModel.findByIdAndDelete(id);
}

module.exports = {
    find: find,
    findById : findById,
    create  : create,
    update : update,
    delete : deleteOne
}
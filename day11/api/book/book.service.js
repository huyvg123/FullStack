const reponsitory = require('./book.reponsitory.js');

const find = async function(query) {
    //validate query
    //logic
    return await reponsitory.find(query);
}

const findById = async function(id) {
    return await reponsitory.findById(id);
}

const create = async function(data) {
    if(!data || !data.title || !data.author) {
        throw new Error("Missing input!");
    }
    return await reponsitory.create(data);
}

const update = async function(id, data) {
    //Validate
    const existedRecord = await reponsitory.findById(id);
    if (!existedRecord) {
        throw new Error("Entity not found");
    }

    return await reponsitory.update(id, data);
}

const deleteOne = async function(id) {
    //Validate
    const existedRecord = await reponsitory.findById(id);
    if (!existedRecord) {
        throw new Error("Entity not found");
    }

    return await reponsitory.delete(id);
}

module.exports = {
    find: find,
    findById: findById,
    create: create,
    update: update,
    delete: deleteOne
};

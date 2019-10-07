const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/web28');

var Users = mongoose.model('user', {
    name: String,
    password: String,
    id: Number
});

function addUser(name, password, id) {
    var newUser  = new Users({  
        name, password, id
    }) 
    
    newUser.save(function(err) {
        if(err) console.log(err);
        else console.log("user added!");
    })
}

console.log(addUser)

function getUser(name, password, id) {
    Users.find({'name':name}, {$set:{'name': name, 'password':password, 'id': id}}).exec(function(err, data) {
        if(err) console.log(err); 
        else console.log(data);
    })
}

function updateUser(name, password, id) {
    Users.findOneAndUpdate({'name': name}, {$set:{'name': name, 'password': password, 'id': id}}).exec(function(err) {
        if(err) console.log(err);
        else console.log('User was updating!')
    })
}

function deleteUser(name) {
    Users.deleteOne({'name': name}).exec(function(err) {
        if(err) console.log(err);
        else console.log('User deleted complete!')
    })
}
// CatModel.find({age: 2}).limit(3).skip(2).sort({name: 'desc'}).exec(function(err, data) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })
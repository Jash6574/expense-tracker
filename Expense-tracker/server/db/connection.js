const { error } = require('console');
const mongoose = require('mongoose');
const conn = mongoose.connect(process.env.ATLAS_URI)
.then(db => {
    console.log("Database Connected Successfully!!!");
    return db;
}).catch(error => {
    console.log("OOPSS Something Went Wrong to Connection");
})


module.exports = conn;